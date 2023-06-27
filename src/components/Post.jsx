import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post () {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/jmoura-dev.png" />
          <div className={styles.authorInfo}>
            <strong>Jackson Moura</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="27 de Junho ás 12:08" dateTime="2023-06-27 12:05">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="https://github.com/jmoura-dev" target='_blank' rel="noreferrer">👉 github/jmoura-dev/repos</a></p>
        <p>
          <a>#novoprojeto</a>{' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

  

  

  

  