document.addEventListener('alpine:init', () => {
    Alpine.data('perlengkapan', () => ({
        items:[
            {id: 1, name: 'Nike Vaporfly 3 ', img: 'Nike Vaporfly 3.png', price: 999999}, 
            {id: 2, name: 'Adidas Running Duramo ', img: 'Adidas Running Duramo.png', price: 900000}, 
            {id: 3, name: '910 Nineten FUJI RCV Sepatu Lari ', img: '910 Nineten FUJI RCV Sepatu Lari.png', price:479900 }, 
            {id: 4, name: 'NB New Balance 530 ', img: 'NB New Balance 530.png', price: 620000}, 
            {id: 5, name: 'Skechers Go Run Elevate Men Sneakers ', img: 'Skechers Go Run Elevate Men Sneakers.png', price: 2299000}, 
            {id: 6, name: 'Nike Air Zoom Pegasus ', img: 'Nike Air Zoom Pegasus.png', price: 899000},
        ], 
    }));


    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem){
            this.items.push(newItem);
            this.quantity++;
            this.total+= newItem.price;
            console.log(this.total);
        }
    })
});

// konversi ke Rupiah 
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}