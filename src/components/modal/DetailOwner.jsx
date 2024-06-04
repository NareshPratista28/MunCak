import React from "react";

export default function DetailOwner({
  showEditButton = true,
  showDeleteButton = true,
  buttonText = "Save All",
  closeModal,
}) {
  return (
    <div className="modal-content w-9/12 md:w-3/12 flex flex-col gap-3 text-darkText bg-white p-0 text-xs relative">
      <button
        onClick={closeModal}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-darkText hover:bg-gray-200"
      >
        ✕
      </button>
      <img
        src="https://source.unsplash.com/random/300x200"
        alt="Random"
        className="w-full h-28 object-cover"
      />
      <p className="ml-5 font-semibold text-base">
        Trip ke Gunung Rinjani, Yuk!
      </p>
      <div className="divider mt-0" />
      <div className="p-5 -mt-10 font-semibold">
        <p>Trip Information</p>
        <p className="font-normal">Mountain Location</p>
        <p className="font-normal text-lightText">Mount Rinjani Borneo</p>
        <p className="mt-3">Dates</p>
        <p className="font-normal text-lightText">20 May 2024 - 22 May 2024</p>

        <p className="mt-3">Max Participants</p>
        <p className="font-normal text-lightText">10 Person</p>
      </div>
      <div className="divider -mt-7" />
      <div className="p-5 -mt-10 font-semibold">
        <div className="grid grid-cols-2">
          <p>Participants</p>
          {showEditButton && (
            <button className="justify-self-end underline">Edit</button>
          )}
        </div>
        <p className="font-normal mt-3">List of Participants: </p>
        <div className="ml-2">
          <p className="font-normal text-lightText">1. Mount Rinjani Borneo</p>
          <p className="font-normal text-lightText">2. Mount Rinjani Borneo</p>
          <p className="font-normal text-lightText">3. Mount Rinjani Borneo</p>
        </div>
      </div>
      <div className="divider -mt-4" />
      <div className="p-5 -mt-10 font-semibold">
        <div className="grid grid-cols-2">
          <p>Gear</p>
          {showEditButton && (
            <button className="justify-self-end underline">Edit</button>
          )}
        </div>
        <p className="font-normal mt-3">List of Gear: </p>
        <div className="ml-2">
          <p className="font-normal text-lightText">1. Sendok</p>
          <p className="font-normal text-lightText">2. Garpu</p>
          <p className="font-normal text-lightText">3. Rizal</p>
        </div>
      </div>
      <div className="divider -mt-4 mb-0" />
      <div className="flex gap-3 p-4 pt-0">
        {showDeleteButton && (
          <button className="btn btn-block bg-gray-400">Delete</button>
        )}
        <button className="btn bg-primary text-white btn-block">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
