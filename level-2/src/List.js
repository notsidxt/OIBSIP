import React,{useState,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const List = () => {
    const navigate=useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const validateToken = async () => {
          try {
            const token = localStorage.getItem('token');
            if (!token) {
              navigate('/');
              return;
            }
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            //console.log('Decoded Token:', decodedToken);
            console.log(decodedToken.user);
          } catch (error) {
            console.error(error.message);
          }
        };
        validateToken();
      }, [navigate]);

      const logout=()=>{
        localStorage.clear('token');
        window.location.reload()
      }
  return (
    <div className='text-white bg-black text-center'>
        {loading && (<>
      <h2 className='text-6xl font-mono mt-12'>Project List</h2>
      <ul className='underline text-3xl mt-32 font-mono'>
        <li>
          <Link to='/calculator' className='mb-20 block'>Calculator</Link>
        </li>
        <li>
          <Link to='/tribute' className='mb-20 block'>Tribute Page</Link>
        </li>
        <li>
          <Link to='/todo' className='mb-4 block'>To Do</Link>
        </li>
      </ul>
      <button onClick={logout} className='text-white mt-60 border-2 border-white rounded-xl p-8'>Log Out</button>
      </>)}
      
    </div>
  );
};

export default List;
