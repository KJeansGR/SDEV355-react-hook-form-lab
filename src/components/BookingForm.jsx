import { useState } from "react";
import { useForm } from "react-hook-form";

import { TIMES } from "../data/tonight.js";
import RenderBadge from "./RenderBadge.jsx";

function BookingForm({ onBook }) {
  const {register, handleSubmit, reset} = useForm();
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [partySize, setPartySize] = useState("");
  // const [time, setTime] = useState("");
  // const [notes, setNotes] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const booking = {
  //     id: crypto.randomUUID(),
  //     name,
  //     phone,
  //     partySize: Number(partySize),
  //     time,
  //     notes,
  //   };
  //   onBook(booking);
  //   setName("");
  //   setPhone("");
  //   setPartySize("");
  //   setTime("");
  //   setNotes("");
  // }
  function saveBooking(data){

    console.log(JSON.stringify(data, null, 2));

    const booking = {id: crypto.randomUUID(), ...data}

    onBook(booking);
    reset();
  }

  return (
    <section className="panel">
      <div className="panel-head">
        <h2 className="panel-title">Book a table</h2>
        <RenderBadge />
      </div>
      <form className="booking-form" onSubmit={handleSubmit(saveBooking)}>
        <div className="field">
          <label className="field-label" htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            {...register("name")}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="input"
            type="tel"
            // value={phone}
            {...register("contact.phone")}
          />
        </div>
        <div className="field">
          <label className="field-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            {...register("contact.email")}
          />
        </div>
        <div className="field-row">
          <div className="field">
            <label className="field-label" htmlFor="partySize">Party size</label>
            <input
              id="partySize"
              className="input"
              type="number"
              min="1"
              max="12"
              // value={partySize}
              {...register("partySize")}
            />
          </div>
          <div className="field">
            <label className="field-label" htmlFor="time">Time</label>
            <select
              id="time"
              className="input"
              // value={time}
              {...register("time")}
            >
              <option value="">Choose a time</option>
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          
          <div className="field">
            <span className="field-label">Seating</span>
            <div className="choices">
              <label  className="choice">
                <input type="radio" value="indoor" {...register("seating")}/>
                  Indoor
              </label>
              <label  className="choice">
                <input type="radio" value="Patio" {...register("seating")}/>
                  Patio
              </label>
              <label  className="choice">
                <input type="radio" value="Bar" {...register("seating")}/>
                  Bar
              </label>
            </div>

            <label  className="choice">
            <input id="celebrating" type="checkbox" value="Bar" {...register("celebrating")}/>
              celebrating something
          </label>
          </div>

        </div>

        <div className="field">
          <label className="field-label" htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            className="input"
            rows="3"
            // value={notes}
            {...register("notes")}
          />
        </div>

        <button className="book-button">Book the table</button>
      </form>
    </section>
  );
}

export default BookingForm;
