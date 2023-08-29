class MovieReservation {
    constructor(obj) {
        this.movieTitle = obj.movieTitle;
        this.cinema = obj.cinema;
        this.runningTime = obj.runningTime;
        this.seatCount = obj.seatCount;
        this.ticketPrice = 10000;
    } // 배열의 형태보다는 객체 형태가 더 쉽게 볼 수 있음

    reserveMovie() {
        console.log(`${this.movieTitle}를 예매했습니다.`);
    }

    cancelMovie() {
        console.log(`${this.movieTitle}를 취소했습니다.`);
    }

    buyTickets() {
        console.log("총 금액은 " + this.getTotalPrice() + "원 입니다.");
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
        console.log("최종 금액은" + salePrice + "입니다.")
    }

    getTotalPrice() {
        return this.seatCount * this.ticketPrice;
    }
}


let movieObj = {
    movieTitle: "엘리멘탈",
    cinema: "CGV",
    runningTime: "01:49",
    seatCount: 1
};


const movie = new MovieReservation(movieObj);
movie.reserveMovie();
movie.cancelMovie();
movie.buyTickets();
movie.discountCoupon('k1000');


///
class HotelReservation {
    constructor(obj) {
        this.hotelName = obj.hotelName;
        this.checkIn = obj.checkIn;
        this.checkOut = obj.checkOut;
        this.reservationDate = obj.reservationDate;
        this.reservationPrice = 300000;
    }

    reserveHotel() {
        console.log(`${this.hotelName} 예약되었습니다.`);
    }

    cancelHotel() {
        console.log(`${this.hotelName} 예약이 취소되었습니다.`);
    }

    buyTickets() {
        console.log("총 금액은 " + this.getTotalPrice() + "원 입니다.");
    }

    checkInTime() {
        console.log(`체크인 시간은 ${this.checkIn} 입니다.`);
    }

    checkoutTime() {
        console.log(`체크아웃 시간은 ${this.checkOut} 입니다.`);
    }

    reservationDay() {
        console.log(`예약한 날짜는  ${this.reservationDate} 입니다.`);
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
        console.log("룸은" + roomName + "이며 최종 금액은" + totalPrice + "입니다.")
    }

}


let hotelObj = {
    hotelName: "그랜드 하얏트",
    checkIn: "13:00",
    checkOut: "15:00",
    reservationDate: "2023년 07월 16일 일요일",
    reservationPrice: 300000
};


const hotel = new HotelReservation(hotelObj);
hotel.reserveHotel();
hotel.cancelHotel();
hotel.checkInTime();
hotel.checkoutTime();
hotel.reservationDay();
hotel.getTotalPrice('premium');
///
class Reservation {
    constructor(obj) {
        this.name = obj.name;
        this.reservationDate = obj.reservationDate;
        this.reservationTime = obj.reservationTime;
        this.price = obj.price;
    } // 배열의 형태보다는 객체 형태가 더 쉽게 볼 수 있음
    
    reserveName() {
        console.log(`${this.name}를 예약했습니다.`);
    }

    reserveDate() {
        console.log(`예약하신 날짜는 ${this.reservationDate}입니다.`);
    }

    reserveTime() {
        console.log(`사용가능한 시간은 ${this.reservationTime}입니다.`);
    }

    reservePrice(){
        console.log(`결제 금액은 총 ${this.price}입니다.`);
    }
}


class Movie extends Reservation {
    constructor(obj) {
        this.cinema = obj.cinema;
        this.seatCount = obj.seatCount;
    }
}

///
class Me {
    constructor(obj) {
        this.myName = obj.myName;
        this.age = obj.age;
        this.thisYear = obj.thisYear;
        this.brithDayYear = obj.brithDayYear;
        this.height = obj.height;
        this.weight = obj.weight;
    }

    name() {
        console.log(`이름 : ${this.myName}`);
    }

    NowAge(thisYear, brithDayYear) {
        this.age = Number(thisYear) - Number(brithDayYear);
        console.log(`나이: ${this.age} 입니다.`);
    }

    BMI(height, weight) {
        console.log(`키 :${this.height}`);
        console.log(`몸무게 : ${this.weight} `);
        let bmi;
        bmi = (Number(weight)) / (Number(height) * Number(height)) * 10000;
        console.log()
        if (bmi < 18.5) {
            console.log(`bmi 지수가 ${bmi.toFixed(2)} 이므로 저체중 입니다.`)
        } else if (bmi <= 23) {
            console.log(`bmi 지수가 ${bmi.toFixed(2)} 이므로 정상 입니다.`)
        } else if (bmi <= 30) {
            console.log(`bmi 지수가 ${bmi.toFixed(2)} 이므로 비만 입니다.`)
        } else if (bmi > 31) {
            console.log(`bmi 지수가 ${bmi.toFixed(2)} 이므로 고도비만 입니다.`)
        }
    }


}


let myObj = {
    myName: "김민지",
    thisYear: Number(2023),
    brithDayYear: Number(1998),
    height: Number(160),
    weight: Number(56)
};


const myInformation = new Me(myObj);
myInformation.name();
myInformation.NowAge(myObj.thisYear, myObj.brithDayYear);
myInformation.BMI(myObj.height, myObj.weight);

///
class Company {
    constructor(obj) {
        this.CompanyName = obj.CompanyName;
        this.anniversary = obj.anniversary;
        this.thisYear = obj.thisYear;
    }


    CompanyNameIs() {
        console.log(`회사 이름 : ${this.CompanyName}`);
    }

    CompanyAnniversary(thisYear, anniversary) {
        this.age = Number(thisYear) - Number(anniversary);
        console.log(`${this.CompanyName}회사는 창립한지  ${this.age} 주년 입니다.`);
    }
}

let CompanyObj = {
    CompanyName: "ENP",
    thisYear: Number(2023),
    anniversary: Number(2019),
};

const Companyinformation = new Company(CompanyObj);
Companyinformation.CompanyNameIs();
Companyinformation.CompanyAnniversary(CompanyObj.thisYear, CompanyObj.anniversary);

///
class Cafe {
    constructor(obj) {
        this.cafeName = obj.cafeName;
        this.cafeMenu = obj.cafeMenu;
        this.cafePrice = obj.cafePrice;
    }

    name() {
        console.log(`카페이름 : ${this.cafeName}`);
    }

    menu() {
        console.log(`선택하신 메뉴는  ${this.cafeMenu} 입니다.`);
    }

    price() {
        if (this.cafeMenu === "아이스아메리카노") {
            console.log(`아이스아메리카노 : 4500원`)
        } else if (this.cafeMenu === "카페라떼") {
            console.log(`카페라떼 : 5000원`)
        } else if (this.cafeMenu === "딸기스무디") {
            console.log(`딸기스무디 : 5000원`)
        } else {
            console.log(`선택하신 메뉴가 없습니다.`)
        }
    }
}


let cafeObj = {
    cafeName: "스타벅스",
    cafeMenu: "아이스아메리카노",
};


const cafeInformation = new Cafe(cafeObj);
cafeInformation.name();
cafeInformation.menu();
cafeInformation.price();

///

class StationeryStore {
    constructor(obj) {
        this.stationeryStore = obj.stationeryStore;
        this.product = obj.product;
        this.productPrice = obj.productPrice;
    }

    name() {
        console.log(`문구점 : ${this.stationeryStore}`);
    }

    productObj() {
        console.log(`구매하시는 상품은 ${this.product} 입니다.`);
    }

    productPriceObj() {
        if (this.product === "연필") {
            console.log(`연필 : 1000원`)
        } else if (this.product === "공책") {
            console.log(`공책 : 2000원`)
        } else if (this.product === "딸기스무디") {
            console.log(`도화지 : 500원`)
        } else {
            console.log(`선택하신 메뉴가 없습니다.`)
        }
    }
}


let StationeryObj = {
    stationeryStore: "드림디포",
    product: "연필",
};


const StationeryObjInformation = new StationeryStore(StationeryObj);
StationeryObjInformation.name();
StationeryObjInformation.productObj();
StationeryObjInformation.productPriceObj();