package ss12_java_collection_framework.bai_tap.quan_ly_xe.model;

public class Car extends MeansofTransportation{
    private String seatNumber ;
    private String typeOfCar;


    public Car(String numberPlate, String producer, String yearOfProduction, String owner, String seatNumber, String typeOfCar) {
        super(numberPlate, producer, yearOfProduction, owner);
        this.seatNumber = seatNumber;
        this.typeOfCar = typeOfCar;
    }

}
