function factorial(number) {
    if(number == 0 ) {
        return 1;
    }
    return number * factorial(--number);
};

factorial(3)