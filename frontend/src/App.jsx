import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateBooks } from './pages/CreateBooks'
import { ShowBooks } from './pages/ShowBooks'
import { EditBooks } from './pages/EditBooks'
import { DeleteBooks } from './pages/DeleteBooks'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBooks />} />
    </Routes>
    </BrowserRouter>
  )
}
