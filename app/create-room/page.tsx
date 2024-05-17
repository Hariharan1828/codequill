"use client";
import React from 'react'
import CreateFormRoomPage from './create_room_form'

const CreateRoomPage = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col gap-8 pt-12 pb-24">
    <h1 className="text-4xl font-bold">Create Room</h1>

    <CreateFormRoomPage />
  </div>
  )
}

export default CreateRoomPage