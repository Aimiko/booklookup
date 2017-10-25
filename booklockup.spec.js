function booklookup(service){
    this.service = service
    this.search = (isbn)=>{
        return service(isbn)
    }

}
test("search data book with amazon isbn",()=>{
    const amazonservice = jest.fn("A123")
        .mockReturnValue({title:"Herry",image:"mg1.jpg",isbn:"A123"})
    let app = new booklookup(amazonservice)
    let result = app.search("A123")

    expect(result).toEqual({title:"Herry",image:"mg1.jpg",isbn:"A123"})
    expect(amazonservice).toBeCalled()
    expect(amazonservice).toBeCalledWith("A123")


})