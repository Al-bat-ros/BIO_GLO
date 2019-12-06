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
              headingOneTwo = document.getElementById('headingOne-two'),
              headingTwoTwo = document.getElementById('headingTwo-two'),
              headingThreeTwo = document.getElementById('headingThree-two');

        accordionTwo.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (target === headingOneTwo || target.parentNode === headingOneTwo.parentNode || target.parentNode === headingOneTwo.children[0] || target.parentNode === headingOneTwo){
             
                collapseOneTwo.classList.add('in');
                collapseTwoTwo.classList.remove('in');
                collapseThreeTwo.classList.remove('in');
            
            }else if (target === headingTwoTwo || target.parentNode === headingTwoTwo.parentNode || target.parentNode === headingTwoTwo.children[0] || target.parentNode === headingTwoTwo){

                collapseTwoTwo.classList.add('in');
                collapseOneTwo.classList.remove('in');
                collapseThreeTwo.classList.remove('in');

            }else if (target === headingThreeTwo || target.parentNode === headingThreeTwo.parentNode || target.parentNode === headingThreeTwo.children[0] || target.parentNode === headingThreeTwo){

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

    // Калькулятор аккордеон
    // const colcAccordion = () => {
    //   const panelGroup = document.querySelector('.panel-group'),

    //         panelOne = document.querySelector('.panel-one'),
    //         panelTwo = document.querySelector('.panel-two'),
    //         panelThree = document.querySelector('.panel-three'),
    //         panelFour = document.querySelector('.panel-four');

    //         console.log(panelGroup);
    //         panelGroup.addEventListener('click', (event) => {
    //             event.preventDefault();
    //             let target = event.target;
    //             console.log(target);
    //             // if (target === )
    //         });

            

    // };
    // colcAccordion();
    







});

