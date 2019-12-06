window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Модальное окно 1
    const modalOne = () => {
        const callBtn = document.querySelectorAll('.call-btn'),
              popupCall = document.querySelector('.popup-call'); 
              
        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
            });
        });

        popupCall.addEventListener('click', (event) => {
            let target = event.target;
                console.log(target);
            if(target.classList.contains('popup-close')){
                popupCall.style.display = 'none';
            }else if (target.classList.contains('popup-call')){
                popupCall.style.display = 'none';
            }
        });
  
    }; 
    modalOne();
    
    // Модальное окно 2
    const modalTwo = () => {
        const discountBtn = document.querySelectorAll('.discount-btn'),
              popupDiscount = document.querySelector('.popup-discount');
              
              discountBtn.forEach((elem) => {
                    elem.addEventListener('click', () => {
                        popupDiscount.style.display = 'block';
                    });
              });

              popupDiscount.addEventListener('click', (event) => {
                let target = event.target;
                console.log(target);
                if (target.classList.contains('popup-close')){
                    popupDiscount.style.display = 'none';
                } else if (target.classList.contains('popup-discount')){
                    popupDiscount.style.display = 'none';
                }
              });

    };
    modalTwo();

    // Аккордеон 2 
    const questions = () => {
        const accordionTwo = document.getElementById('accordion-two'),
              collapseOneTwo = document.getElementById('collapseOne-two'),
              collapseTwoTwo = document.getElementById('collapseTwo-two'),
              collapseThreeTwo = document.getElementById('collapseThree-two'),
              headingOneTwo = document.getElementById('headingOne-two').children,
              headingTwoTwo = document.getElementById('headingTwo-two').children,
              headingThreeTwo = document.getElementById('headingThree-two').children;

        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            
            if (target === headingOneTwo[0].children[0]){
                
                collapseOneTwo.classList.add('in');
                collapseTwoTwo.classList.remove('in');
                collapseThreeTwo.classList.remove('in');
            
            }else if (target === headingTwoTwo[0].children[0]){

                collapseTwoTwo.classList.add('in');
                collapseOneTwo.classList.remove('in');
                collapseThreeTwo.classList.remove('in');

            }else if (target === headingThreeTwo[0].children[0]){

                collapseThreeTwo.classList.add('in');
                collapseTwoTwo.classList.remove('in');
                collapseOneTwo.classList.remove('in');
                
            }
           
        });

    };
    questions();

    // Скидка
    const discount = () => {
        const popupCheck = document.querySelector('.popup-check'),
              checkBtn = document.querySelector('.check-btn');
              
              checkBtn.addEventListener('click', () => {
                popupCheck.style.display = 'block';
              }); 

              popupCheck.addEventListener('click', (event) => {
                let target = event.target;
                console.log(target);
                if (target.classList.contains('popup-close')){
                    popupCheck.style.display = 'none';
                }else if (target.classList.contains('popup-check')){
                    popupCheck.style.display = 'none';
                };
              });
    };
    discount();  
     
    







});

