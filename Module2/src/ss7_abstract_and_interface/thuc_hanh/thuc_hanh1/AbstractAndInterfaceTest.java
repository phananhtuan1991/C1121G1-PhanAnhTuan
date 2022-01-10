package ss7_abstract_and_interface.thuc_hanh.thuc_hanh1;

import ss7_abstract_and_interface.thuc_hanh.thuc_hanh1.Edible.Edible;

public class AbstractAndInterfaceTest {
    public static void main(String[] args) {
        Animal [] animals = new Animal[2];
        animals[0]=new Tiger();
        animals[1]=new Chicken();
        for(Animal animal:animals){
            System.out.println(animal.makeSound());

            if(animal instanceof Chicken){
                Edible edible =(Chicken) animal;
                System.out.println(edible.howToEat());
            }
        }

        Fruit [] fruits= new Fruit[2];
        fruits[0]=new Orange();
        fruits[1]=new Apple();
        for (Fruit fruit :fruits){
            System.out.println(fruit.howToEat());
        }

    }
}
