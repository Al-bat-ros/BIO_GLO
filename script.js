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
    const colcAccordion = () => {
      const panelGroup = document.querySelector('.panel-group'),
            collapseOne = document.getElementById('collapseOne'),
            collapseTwo = document.getElementById('collapseTwo'),
            collapseThree = document.getElementById('collapseThree'),
            collapseFour = document.getElementById('collapseFour'),
            headingOne = document.getElementById('headingOne'),
            headingTwo = document.getElementById('headingTwo'),
            headingThree = document.getElementById('headingThree'),
            headingFour = document.getElementById('headingFour'),   
            constructBtn = document.querySelectorAll('.construct-btn'),
            onoffswitchCheckbox = document.querySelector('.onoffswitch-checkbox');
            
            panelGroup.addEventListener('click', (event) => {
               
                let target = event.target;
               
                const headingAction = () => {
                    if ( target === headingOne || target.parentNode === headingOne.children[0] || target.parentNode === headingOne.children[0].children[0]){
                        
                            collapseOne.classList.add('in');
                            collapseTwo.classList.remove('in');
                            collapseThree.classList.remove('in');
                            collapseFour.classList.remove('in');
                    } else if (target === headingTwo || target.parentNode === headingTwo.children[0] || target.parentNode === headingTwo.children[0].children[0]){
                        
                            collapseOne.classList.remove('in');
                            collapseTwo.classList.add('in');
                            collapseThree.classList.remove('in');
                            collapseFour.classList.remove('in');
                    }else if (target === headingThree || target.parentNode === headingThree.children[0] || target.parentNode === headingThree.children[0].children[0]){
                        
                            collapseOne.classList.remove('in');
                            collapseTwo.classList.remove('in');
                            collapseThree.classList.add('in');
                            collapseFour.classList.remove('in');
                    }else if (target === headingFour || target.parentNode === headingFour.children[0] || target.parentNode === headingFour.children[0].children[0]){
            
                            collapseOne.classList.remove('in');
                            collapseTwo.classList.remove('in');
                            collapseThree.classList.remove('in');
                            collapseFour.classList.add('in');
                    }
                }
                headingAction();

                const switchBox = () => {

                       collapseTwo.children[0].childNodes[7].style.display = 'none';
                       collapseTwo.children[0].childNodes[9].style.display = 'none';
                       collapseTwo.children[0].childNodes[11].style.display = 'none';

                    onoffswitchCheckbox.addEventListener('change', () => {

                       if(!onoffswitchCheckbox.checked){
                        console.log(onoffswitchCheckbox.checked)
                      
                        collapseTwo.children[0].childNodes[7].style.display = '';
                        collapseTwo.children[0].childNodes[9].style.display = '';
                        collapseTwo.children[0].childNodes[11].style.display = '';
                       }
                       if (onoffswitchCheckbox.checked){
                        console.log(onoffswitchCheckbox.checked);
                      
                        collapseTwo.children[0].childNodes[7].style.display = 'none';
                        collapseTwo.children[0].childNodes[9].style.display = 'none';
                        collapseTwo.children[0].childNodes[11].style.display = 'none';
                       }      
                       
                    });
                };
              switchBox();


                const actionBtn = () => {
                    
                    constructBtn.forEach((elem, index) => {
                        elem.classList.add(`construct-btn${index}`);
                    });
                    
                    if (target.classList.contains('construct-btn0') || target === constructBtn[0].children[0]){ 
                        switchBox();            
                        collapseTwo.classList.add('in');               
                    }else if(target.classList.contains('construct-btn1') || target === constructBtn[1].children[0]){                        
                        collapseThree.classList.add('in');           
                    }else if(target.classList.contains('construct-btn2') || target === constructBtn[2].children[0]){
                        collapseFour.classList.add('in');
                    }
                };
                actionBtn();

                const calc = () => {

                };
                calc();


               
            });


    };
    colcAccordion();
    







});


