
let reservation = {
  insert: "INSERT INTO reservation(ParkingSpot, creatorId, eta,timezone,created) VALUES(?,?,?,?,?)",
  update: "UPDATE reservation SET ParkingSpot=?, creatorId=? ,eta=?,timezone=?,WHERE id=created",
  delete: "DELETE FROM reservation WHERE id=created",
  queryById: "SELECT * FROM reservation WHERE created=?",
  queryAll: "SELECT * FROM reservation",
};
let platenumbers = {
  insert: "INSERT INTO platenumbers(palateNo,plate_userId) VALUES(?,?)",
  update: "UPDATE platenumbers SET plate_userId=? WHERE palateNo=?",
  delete: "DELETE FROM platenumbers WHERE palateNo=?",
  queryById: "SELECT * FROM platenumbers WHERE palateNo=?",
  queryAll: "SELECT * FROM platenumbers",
};
let parkingspots= {
    insert: "INSERT INTO parkingspots(Sparkinguser,SparkingName,types,capacity,SparkingStaus,longitude,latitude) VALUES(?,?,?,?,?,?,?)",
    update: "UPDATE parkingspots SET Sparkinguser=? WHERE SparkingName=?",
    delete: "DELETE FROM parkingspots WHERE SparkingName=?",
    queryById: "SELECT * FROM parkingspots WHERE SparkingName=?",
    queryAll: "SELECT * FROM parkingspots",
  };
let parkinglot_table={
  insert: "INSERT INTO parkinglot_table(id,ParkinglotNumber,Rest_num,time) VALUES(?,?)",
  update: "UPDATE parkinglot_table SET ParkinglotNumber=? WHERE id=?",
  delete: "DELETE FROM parkinglot_table WHERE id=?",
  queryById: "SELECT * FROM parkinglot_table WHERE id=?",
  queryAll: "SELECT * FROM parkinglot_table",
  queryToRest:"SELECT Rest_num FROM parkinglot_table order by id DESC limit 1"
}
let yuding ={
  insert: "INSERT INTO yuding(PaiZhao) VALUES(?)",
  update: "UPDATE yuding SET PaiZhao=? WHERE id=?",
  delete: "DELETE FROM yuding WHERE id=?",
  queryById: "SELECT * FROM yuding WHERE id=?",
  queryAll: "SELECT * FROM yuding",
}
let reservations={
  insert: "INSERT INTO reservations(user,carnumber,time,address) VALUES(?,?,?,?)",
  queryAll: "SELECT * FROM reservations",
}
module.exports = {
  platenumbers,
  reservation,
  parkingspots,
  parkinglot_table,
  yuding,
  reservations,
};