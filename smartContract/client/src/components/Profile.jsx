import React, { useEffect, useState } from 'react';
import bg from "../assets/bg.gif";
import { Link } from 'react-router-dom';
import { Window } from '@mui/icons-material';
import Card from './Card';
import { Grid } from "@mui/material";

function Profile({state}) {
    
    const [userPost, setUserPost] = useState([]);
    const [post , setPost] = useState([]);
    const storedAccount = localStorage.getItem("account");
    
    const storedProfileImg = localStorage.getItem("profileImg");

    const storedName = localStorage.getItem("name");
    useEffect(() => {
        const { contract } = state;
        const tubes = async () => {
          
         
          const res = await contract.methods.getPosts().call();
          
         setPost(res)
          const userPosts = await res.filter(post => post.account === storedAccount);
          setUserPost(userPosts);
    
        }
        contract && tubes();
    }, [state ,storedAccount]);
    

    return (
        <div className='' style={{ backgroundImage: `url(${bg})`, height: "110vh", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }}>
            <div className='w-100 h-100 blue-glassmorphism'>
                <div className='d-flex justify-content-between align-items-center pe-5 text-light'>
                    <div className='align-items-center d-flex p-4'>
                        <img src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF92ZWN0b3JfbGluZV9hcnRfb2ZfYWJzdHJhY3Rfb3JhbmdlX2ZveF9fbWluaW1hbF82NjcwYWEwNy1mZTM5LTQzZWMtODUzYS0zZmExZTBiMDk5YWFfMS5wbmc.png" alt="" style={{ width: "180px" }} />
                        <div className='d-flex flex-column'>
                            <span className='fs-1 fw-bolder text-light'>FoxyShare</span>
                            <span className="text-secondary fw-bold ms-2">web3.0 video sharing app </span>
                        </div>
                    </div>
                    <Link to="/foxyshare" className='fs-1' >
                        <Window className='fs-1 text-warning' style={{ cursor: "pointer" }} />
                    </Link>
                </div>

                <div className='pe-5 ps-5  text-light'>
                    <div className='text-center blue-glassmorphism p-4'>
                        <img src={storedProfileImg} className='' style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} alt="" />
                        <span>
                            <h1 className='fw-bold mb-3'>{storedName}</h1>
                            <h6 className='text-secondary'>( {storedAccount} )</h6>
                        </span>
                    </div>
                    <hr />
                    <div className=' overflow-y-scroll ' style={{ height: "448px" }}>
                        <Grid container spacing={5}>
                            {userPost.slice().reverse().map((tube, index) => {
                               
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={index}>
                                        <Card account={tube.account} name={tube.name} title={tube.title} description={tube.description} videoUrl={tube.videoUrl} profileImg={tube.profileImg} thumbnail={tube.thumbnail} tubes={post} />
                                    </Grid>
                                );
                            })}

                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
