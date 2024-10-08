import {useDispatch} from 'react-redux';
import {postReactionAdded} from '../redux/slices/postSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
}
export const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" className="muted-button reaction-button" onClick={() => dispatch(postReactionAdded({postId: post.id, reaction: name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return <div>{reactionButtons}</div>
}

export default ReactionButtons;