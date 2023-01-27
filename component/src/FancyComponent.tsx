import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const FancyComponent: Component = () => {
  return (
    <div class={styles.App}>
      Hell Yeah
    </div>
  );
};

export default FancyComponent;
