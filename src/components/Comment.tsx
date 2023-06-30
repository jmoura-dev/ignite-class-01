import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; 
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleAddLikeInComment () {
    setLikeCount((state) => {
      return state + 1
    })
  }

  function handleDeleteComment () {
    onDeleteComment(content)
  }
 
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jmoura-dev.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jackson Moura</strong>
              <time title="27 de Junho ás 12:08" dateTime="2023-06-27 12:05">Cerca de 1h atrás</time>
            </div>

            <button 
              onClick={handleDeleteComment}
              title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleAddLikeInComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}