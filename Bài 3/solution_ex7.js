const hotelRooms = [
  { roomId: "P101", roomType: "Standard", pricePerNight: 800000, status: "VACANT" },
  { roomId: "P102", roomType: "Deluxe", pricePerNight: 1200000, status: "OCCUPIED" },
  { roomId: "P103", roomType: "Superior", pricePerNight: 1000000, status: "MAINTENANCE" }
];

console.log("--- DANH SÁCH PHÒNG BAN ĐẦU ---");
console.table(hotelRooms);

const newRoom = { 
  roomId: "P104", 
  roomType: "VIP Suite", 
  pricePerNight: 3500000, 
  status: "VACANT" 
};
hotelRooms.push(newRoom);

console.log("--- DANH SÁCH PHÒNG SAU KHI THÊM P104 ---");
console.table(hotelRooms);

for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P101") {
    hotelRooms[i].status = "OCCUPIED";
    break;
  }
}

console.log("--- DANH SÁCH PHÒNG SAU KHI P101 CHECK-IN ---");
console.table(hotelRooms);

let indexToDelete = -1;
for (let i = 0; i < hotelRooms.length; i++) {
  if (hotelRooms[i].roomId === "P103") {
    indexToDelete = i;
    break;
  }
}

if (indexToDelete !== -1) {
  hotelRooms.splice(indexToDelete, 1);
}

console.log("--- DANH SÁCH PHÒNG SAU KHI XÓA P103 ---");
console.table(hotelRooms);
