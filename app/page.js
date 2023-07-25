
// import { useEffect } from 'react';
import simpleGit from 'simple-git';

const Home = () => {
  const repoUrl = 'https://github.com/tuseef-razaq/next-github';

  const makeChanges = async () => {
    try {
      await simpleGit().clone(repoUrl, './temp-repo');
      // Make your changes here, e.g., modify a file
      // fs.writeFileSync('./temp-repo/path/to/file.txt', 'Modified content');
      await simpleGit('./temp-repo').add('./*');
      await simpleGit('./temp-repo').commit('Made changes through Next.js');
      await simpleGit('./temp-repo').push();
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // useEffect(() => {
    makeChanges();
  // }, []);

  return (
    <div>
      <h1>Git Repo Manager</h1>
      <p>Cloning the repository, making changes, and pushing back to the repo...</p>
    </div>
  );
};

export default Home;