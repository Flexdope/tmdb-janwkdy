import React, { useState } from 'react'
import { Container, Stack } from 'react-bootstrap'
import { SiThemoviedatabase } from 'react-icons/si'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Searchbar, Sidebar } from './'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Container
      fluid
      className='position-sticky top-0 bg-dark shadow-lg'
      style={{ zIndex: 10 }}
    >
      <Stack direction='horizontal' className='p-2 justify-content-between'>
        <Stack direction='horizontal' gap={2} style={{ cursor: 'pointer' }}>
          {showMenu ? (
            <AiOutlineClose
              className='d-lg-none text-white'
              size='1.5rem'
              onClick={() => setShowMenu(!showMenu)}
            />
          ) : (
            <FiMenu
              className='d-lg-none text-white'
              size='1.5rem'
              onClick={() => setShowMenu(!showMenu)}
            />
          )}
          <Link to='/'>
            <SiThemoviedatabase size='2.5rem' color='orange' />
          </Link>
        </Stack>
        <Searchbar />
      </Stack>
      {showMenu && <Sidebar/>}
    </Container>
  )
}
