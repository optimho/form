const form = document.querySelector('#sign-up')
const form2 = document.querySelector('#sign-up-2')
const form3 = document.querySelector('#sign-up-3')
const creditCardInput = document.querySelector('#cc')
const termsCheck = document.querySelector('#terms')
const veggiSelect = document.querySelector('#vegi')
const creditCardInput2 = document.querySelector('#cc2')
const termsCheck2 = document.querySelector('#terms2')
const veggiSelect2 = document.querySelector('#vegi2')

const creditCardInput3 = document.querySelector('#cc3')
const termsCheck3 = document.querySelector('#terms3')
const veggiSelect3 = document.querySelector('#vegi3')

const formData = {}
const form3Data ={}

form.addEventListener('submit', function(e){
    // alert('You have submitted')
    console.log('cc', creditCardInput.value)
    console.log('terms', termsCheck.checked)
    console.log('veggi', veggiSelect.value)
    e.preventDefault()
})

creditCardInput2.addEventListener('input', function(e){
    // alert('credit card changed')
    console.log('cc', creditCardInput2.value)
    formData['cc'] = e.target.value;
    // console.log('terms', termsCheck2.checked)
    // console.log('veggi', veggiSelect2.value)

})

termsCheck2.addEventListener('input', function(e){
    // alert('credit card changed')
    console.log('terms', termsCheck2.checked)
    formData['terms'] = e.target.checked;
    // console.log('terms', termsCheck2.checked)
    // console.log('veggi', veggiSelect2.value)

})

veggiSelect2.addEventListener('input', function(e){
    // alert('credit card changed')
    console.log('event object ', e)
    formData['veggi'] = e.target.value;
    // console.log('terms', termsCheck2.checked)
    console.log('veggi', veggiSelect2.value)

})
/*
Here is another way of doing the above
 */


for (let val of [creditCardInput3, veggiSelect3, termsCheck3]){
    val.addEventListener('input', (e)=>{
        const {name, type, value, checked} = e.target
        console.log(e.target)
        form3Data[name] = type === 'checkbox' ? checked : value;
        // console.log(`name ${name3} type ${type3} value ${value3} is checked ${checked3}`)

    })

}
