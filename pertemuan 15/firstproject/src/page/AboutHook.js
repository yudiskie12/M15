import React from 'react';

function AboutHook() {
  return (
    <div className='bg-light'>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6 p-5'>
            <h1 className='display-4'>About Us</h1>
            <p className='lead mb-0'>
              Hi, Andre Pratama built this Website. Be Happy!
            </p>
          </div>
          <div className='col-lg-6 d-none d-lg-block'>
            <img
              src='https://bootstrapious.com/i/snippets/sn-about/illus.png'
              alt=''
              className='img-fluid'
              style={{ height: 'auto', maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHook;