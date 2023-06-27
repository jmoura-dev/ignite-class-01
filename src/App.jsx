import { Header } from "./components/Header";

import styles from './App.module.css';

import './globals.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos, optio, dolorum ipsam illo facilis, assumenda sit neque 
        reiciendis velit vel similique minima molestiae. Ducimus doloribus
        hic libero commodi? Soluta, optio?
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quos, optio, dolorum ipsam illo facilis, assumenda sit neque 
        reiciendis velit vel similique minima molestiae. Ducimus doloribus
        hic libero commodi? Soluta, optio?
        </main>
      </div>
    </div>
  )
}

