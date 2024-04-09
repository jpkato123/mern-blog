import { Button, Textarea } from 'flowbite-react'
import { useState } from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function CommentSection({postId}) {
    const {currentUser} = useSelector(state => state.user)
    const [comment, setComment] = useState('')

    const handleSubmit =async (e) => {
        e.preventDefault();
        if(comment.length >200) {
            return
        }
        const res = await fetch('/api/comment/create',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({content: comment, postId, userId: currentUser._id})

        });
        const data = await res.json();
        if(res.ok) {
            setComment('');
        }
    }
  return (
    <div className='max-w-2xl mx-auto p-3'>
        {currentUser ? (
            <div className="flex items-center gap-2 my-5 text-gray-500 text-sm">
                <p>Signed in as:</p>
                <img className='h-5 w-5 object-cover rounded-full' src={currentUser.profilePicture} alt="" />
                <Link to='/dashboard?tab=profile' className='text-xs text-cyan-500 hover:underline'>
                @{currentUser.username}
                </Link>
            </div>
        ) : (
            <div className="text-sm text-teal-500 my-5 flex gap-3">
                You must be signed in to comment.
                <Link className='text-blue-500 hover:underline' to='/sign-in'>
                    Sign In
                </Link>
            </div>
        )}
        {currentUser && (
            <form onSubmit={handleSubmit} className='border border-teal-500 rounded-md p-3 w-full'>
                <Textarea
                placeholder='Add a comment ...'
                rows='3'
                maxLength='200'
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                />
                <div className="flex justify-between items-center mt-5">
                    <p className='text-gray-500 text-xs'>{200-comment.length} chacracters remaining</p>
                    <Button outline gradientDuoTone='purpleToBlue' type='submit'>
                        Submit
                    </Button>
                </div>
            </form>
        )}
    </div>
  )
}
