class Reserve {
    constructor(obj) {
        this.reservationTitle = obj.reservationTitle;
        this.reserveDate = this.getCurrentDate();
    }

    reserveItem() {
        console.log(`${this.reservationTitle}를 예약했습니다.`);
    }

    cancelReservation() {
        console.log(`${this.reservationTitle} 예약을 취소했습니다.`);
    }

    buyTickets() {
        console.log("총 금액은 " + this.getTotalPrice() + "원 입니다.");
    }

    getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let day = today.getDate();
        day = day < 10 ? "0" + day : day;
        return console.log(`예약하신 날짜는 ${year}년 ${month}월 ${day}일 입니다`);
    }
}



class MovieReservation extends Reserve {
    constructor(obj) {
        super(obj);
        this.movieTitle = obj.movieTitle;
        this.cinema = obj.cinema;
        this.runningTime = obj.runningTime;
        this.seatCount = obj.seatCount;
        this.ticketPrice = 10000;
    }

    discountCoupon(couponCode) {
        let salePrice;
        let totalPrice = this.getTotalPrice();
        if (couponCode === "k1000") {
            salePrice = Math.floor(Number(totalPrice * 0.7));
        } else if (couponCode === "e1000") {
            salePrice = Math.floor(Number(totalPrice * 0.5));
        } else if (couponCode === "t1000") {
            salePrice = Math.floor(Number(totalPrice * 0.3));
        }
        console.log("최종 금액은" + salePrice + "입니다.");
    }

    getTotalPrice() {
        return this.seatCount * this.ticketPrice;
    }
}

class HotelReservation extends Reserve {
    constructor(obj) {
        super(obj);
        this.hotelName = obj.hotelName;
        this.checkIn = obj.checkIn;
        this.checkOut = obj.checkOut;
        this.reservationPrice = 300000;
    }

    checkInTime() {
        console.log(`체크인 시간은 ${this.checkIn} 입니다.`);
    }

    checkoutTime() {
        console.log(`체크아웃 시간은 ${this.checkOut} 입니다.`);
    }

    getTotalPrice(roomName) {
        let totalPrice;
        if (roomName === "basic") {
            totalPrice = Math.floor(Number(this.reservationPrice));
        } else if (roomName === "sweet") {
            totalPrice = Math.floor(Number(this.reservationPrice * 1.2));
        } else if (roomName === "premium") {
            totalPrice = Math.floor(Number(this.reservationPrice * 1.5));
        }
        console.log("룸은" + roomName + "이며 최종 금액은" + totalPrice + "입니다.");
    }
}


let movieObj = {
    reservationTitle: "영화",
    reserveDate: "",
    movieTitle: "엘리멘탈",
    cinema: "CGV",
    runningTime: "01:49",
    seatCount: 1
};

const movie = new MovieReservation(movieObj);
movie.reserveItem();
movie.cancelReservation();
movie.buyTickets();
movie.discountCoupon('k1000');

let hotelObj = {
    reservationTitle: "호텔",
    reserveDate: "",
    hotelName: "그랜드 하얏트",
    checkIn: "13:00",
    checkOut: "15:00",
    reservationPrice: 300000
};

const hotel = new HotelReservation(hotelObj);
hotel.reserveItem();
hotel.cancelReservation();
hotel.checkInTime();
hotel.checkoutTime();
hotel.getTotalPrice('premium');