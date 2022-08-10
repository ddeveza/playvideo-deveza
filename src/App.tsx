import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

/* 
  1. pause at 1:04 and hide controls
  2. display the question 3 + 2 = 
  3 . if answer is wrong alert you are incorrect choose the correct answer
  4. if answer is correct show controls and play  
*/

function App() {
  const playerRef = useRef<ReactPlayer | null>(null);

  const [val, setVal] = useState(0);
  const [controls, setControls] = useState({
    playing: true,
    control: true,
    time: 0,
    showQuestion: false,
    answered: false,
  });

  useEffect(() => {
    let currentTime: any;
    if (playerRef.current) {
      const time = playerRef?.current?.getCurrentTime();
      currentTime = setTimeout(() => {
        setControls((p) => {
          return {
            ...p,
            time: playerRef?.current?.getCurrentTime() ?? 0,
          };
        });
      }, 1000);

      console.log({ time });
      if (time > 64 && !controls.answered) {
        //to check if at 1.04 play time
        playerRef.current.seekTo(64, 'seconds');

        setControls((p) => ({
          ...p,
          control: false,
          playing: false,
          showQuestion: true,
        }));
      }
    }

    return () => {
      clearTimeout(currentTime);
    };
  }, [controls.time, controls.answered]);

  const handleClick = () => {
    if (val === 5) {
      setControls((p) => ({
        ...p,
        control: true,
        showQuestion: false,
        playing: true,
        answered: true,
      }));
    } else {
      alert('Please choose correct answer to proceed playing the video.');
    }
  };

  return (
    <div
      className='App'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <div>
        {controls.showQuestion && (
          <div>
            <h1> What is the answer for "3 + 2" ? </h1>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '10rem',
                gap: '1rem',
                padding: '1rem 0 1rem 0',
                alignContent: 'center',
              }}
            >
              <div>
                <input
                  type='radio'
                  name='answer'
                  value={5}
                  onChange={() => setVal(5)}
                />
                <span>
                  <label>5</label>
                </span>
              </div>
              <div>
                <input
                  type='radio'
                  name='answer'
                  value={8}
                  onChange={() => {
                    setVal(8);
                  }}
                />
                <span>
                  <label>8</label>
                </span>
              </div>
              <div>
                <input
                  type='radio'
                  name='answer'
                  value={3}
                  onChange={() => {
                    setVal(3);
                  }}
                />
                <span>
                  <label>3</label>
                </span>
              </div>
              <div>
                <input
                  type='radio'
                  name='answer'
                  value={4}
                  onChange={() => {
                    setVal(4);
                  }}
                />
                <span>
                  <label>4</label>
                </span>
              </div>

              <button onClick={handleClick}>Submit Answer</button>
            </div>
          </div>
        )}
      </div>
      <ReactPlayer
        url={'assets/video.mp4'}
        playing={controls.playing}
        controls={controls.control}
        ref={playerRef}
        onPlay={() => {
          console.log('play');
          setControls((p) => ({
            ...p,
            time: 1,
          }));
        }}
      />
    </div>
  );
}

export default App;
