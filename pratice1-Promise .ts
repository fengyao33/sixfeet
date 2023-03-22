const checkScore = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    const score = Math.round(Math.random() * 100);
    setTimeout(() => {
      if (score >= 60) {
        resolve(score);
      } else {
        reject(score);
      }
    }, 1000);
  });
};

checkScore()
  .then((score) => console.log(`${score}分及格`))
  .catch((err) => console.log(`${err}分不及格`));
