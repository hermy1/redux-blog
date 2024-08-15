import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from '../redux/slices/postSlice'
import { getAllUsers } from '../redux/slices/userSlice'
function SubmitPosts() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  
  const users = useSelector(getAllUsers);
  console.log(users)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)


  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content,userId)
      )
      setTitle('')
      setContent('')
    }
  }
const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  
  return (
    <div className="mt-2 border p-4">
      <h2>Add posts</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} className="block px-3" />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} className="block px-3" />
        <label htmlFor="postUser">Users:</label>
        <select id="postUser" value={userId} onChange={onAuthorChanged} className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" >
          <option value=""></option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
            ))}
        </select>
        <div className="grid grid-cols-3">
            <button type="button" disabled={!canSave} onClick={onSavePostClicked} className="py-2 px-4 mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">Save Post</button>
        </div>
      </form>
    </div>
  )
}

export default SubmitPosts
