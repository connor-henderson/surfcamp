import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBookings, cancelBooking } from '../../store/booking';
import '../AccountPage/AccountPage.css';
import BookingFormModal from '../BookingFormModal';
import { useSelector } from 'react-redux';
import './Bookings.css';

const Bookings = () => {
    const userId = useSelector(state => state.session.user.id);
    const [bookings, setBookings] = useState([]);
    const dispatch = useDispatch();
    const [updates, setUpdates] = useState(0);

    useEffect(() => {
        dispatch(getBookings(userId)).then((res) => setBookings(res));
    }, [updates, dispatch, userId]);

    const handleCancel = (e) => {
        const bookingId = e.target.value;
        return dispatch(cancelBooking(bookingId))
            .then(() => setUpdates(updates + 1));
    }

    // display each booking location (name only to start) with an 'edit' and 'cancel' button next to them
    return (
        <div className="bookings-container">
            {bookings.map((booking, i) => {
                return <div key={i} className="one-booking-container">
                    <img className="booking-picture" alt="booking location" src={booking.Location.imageUrl} />
                    <div className="header">Check in
                        <p>{booking.checkIn}</p>
                    </div >
                    <div className="header">Check out
                        <p>{booking.checkOut}</p>
                    </div >
                    <div className="header">Guests
                        <p className={booking.guests === 1 ? "guests" : "--hidden"}>{booking.guests} guest</p>
                        <p className={booking.guests !== 1 ? "guests" : "--hidden"}>{booking.guests} guests</p>
                    </div>
                    <div className="header">Request status
                        <p>{'Unapproved'}</p>
                    </div>
                    <BookingFormModal bookingId={booking.id} locationId={booking.locationId}/>
                    <button value={booking.id} onClick={handleCancel}>CANCEL BOOKING</button>
                </div>
            })}
        </div>
    );
}

export default Bookings;
