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

    // Калькулятор аккорд
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
            panelBody = document.querySelectorAll('.panel-body'),
            myonoffswitchTwo = document.getElementById('myonoffswitch-two'),
            myonoffswitch = document.getElementById('myonoffswitch'),
            distanceToHome = document.getElementById('distance-to-home'),
            constructBtn3 = document.querySelector('.construct-btn3'),
            calcResult = document.getElementById('calc-result');
           

            class AppData {
                constructor(){
                    this.sum = 0;
                    this.septic = {};
                    this.cam = 0;
                }
            }; 
            
            AppData.prototype.start = function(){
                
                this.myOnOffSwitch();
                this.panelGroupOupen();
                this.record();
                this.myonoff();
                this.distHome();
                this.calcResultFin();
                this.sendForm();
            };
            const appData = new AppData();
           
                   // Запись в обьект
                    
                   AppData.prototype.record = function(){
                        this.septic.camera = this.cam; 
                     
                        panelBody[1].addEventListener('change', (event) => {
                            let target = event.target;
    
                            if ((target.value) === '1.4 метра'){
                                this.septic.diameter = target.value;      
                            }; 
                            if ((target.value) === '2 метра'){
                               this.septic.diameter = target.value;   
                            }; 
                            if ((target.value) === '1 штука'){
                                this.septic.numberrings = target.value;   
                            };
                            if ((target.value) === '2 штуки'){
                                this.septic.numberrings = target.value;  
                            };
                            if ((target.value) === '3 штуки'){
                                this.septic.numberrings = target.value;
                            };
                           
                        });
                    };
                    
                    // SwichBox Наличие днища колодца.
                    AppData.prototype.myonoff = function(){

                        myonoffswitchTwo.addEventListener('change', () => {
                            if(myonoffswitchTwo.checked){
                                this.septic.bottom = 2000;
                            } else if (!myonoffswitchTwo.checked){
                                this.septic.bottom = 1000;
                            }
                        });
                    };
                    // Расстояние до дома
                    AppData.prototype.distHome = function(){
                        distanceToHome.addEventListener('input', () => {
                            this.septic.distanceHome = distanceToHome.value;
                        });
                    };
                    // Мат.действия с объектом
                    AppData.prototype.calcResultFin = function(){
                        
                        constructBtn3.addEventListener('click', () => {
                    
                            for (let key in this.septic){
    
                                if(key === 'diameter' && this.septic.diameter === '2 метра') this.sum = parseFloat(this.septic.camera) * 1.2;
                                if(key === 'numberrings' && this.septic.numberrings === '2 штуки') this.sum *= 1.3;
                                if(key === 'numberrings' && this.septic.numberrings === '3 штуки') this.sum *= 1.5;
                                if(key === 'bottom' && this.septic.bottom === 2000) this.sum += 2000;
                                if(key === 'bottom' && this.septic.bottom === 1000) this.sum += 1000;
                                
                                this.septic.calcResult = this.sum;
                                calcResult.value = this.septic.calcResult;
    
                            };
                        });
                    };
                    
                
                
                AppData.prototype.myOnOffSwitch = function(){

                   const myonoffremoveAdd = (elem, num) => {
                            this.cam = num;
                            collapseTwo.children[0].childNodes[7].style.display = elem;
                            collapseTwo.children[0].childNodes[9].style.display = elem;
                            collapseTwo.children[0].childNodes[11].style.display = elem;
                   };
                   myonoffremoveAdd('none', 10000);
                    
                    myonoffswitch.addEventListener('change', () => {
                       
                        if(myonoffswitch.checked){
                            myonoffremoveAdd('none', 10000);  
                        }else if(!myonoffswitch.checked){
                            myonoffremoveAdd('', 15000);
                        };

                    });
            
                };

                AppData.prototype.panelGroupOupen = function(){ 

                    panelGroup.addEventListener('click', (event) => {
                        let target = event.target;

                        const headingAction = function(){
                            if ( target === headingOne || target.parentNode === headingOne.children[0] || target.parentNode === headingOne.children[0].children[0]){
                                
                                    collapseOne.classList.add('in');
                                    collapseTwo.classList.remove('in');
                                    collapseThree.classList.remove('in');
                                    collapseFour.classList.remove('in');
                            }else if (target === headingTwo || target.parentNode === headingTwo.children[0] || target.parentNode === headingTwo.children[0].children[0]){
                                
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
                        
                        // Кномка Следующий шаг
                        
                            const actionBtn = function(){

                                constructBtn.forEach((elem, index) => {
                                    elem.classList.add(`construct-btn${index}`);
                                });
                                
                                if (target.classList.contains('construct-btn0') || target === constructBtn[0].children[0]){               
                                    collapseTwo.classList.add('in');            
                                }else if(target.classList.contains('construct-btn1') || target === constructBtn[1].children[0]){ 
                                                        
                                    collapseThree.classList.add('in');           
                                }else if(target.classList.contains('construct-btn2') || target === constructBtn[2].children[0]){
                                    
                                    collapseFour.classList.add('in');
                                };
                            };
                            actionBtn();
                        
                    });
                  
                };
                AppData.prototype.sendForm = function(){
    
                    
                   const input = document.querySelectorAll('input'),
                         form = document.querySelectorAll('form');
          
                    form.forEach((elem) => {
                        elem.addEventListener('submit', (event) => {
                                 event.preventDefault();
                                 
                                  const formData = new FormData(elem);
                                  let body = {};
                              
                                  formData.forEach((val, key) => {
                                  body[key] = val;
                                  });
                                 const obj =  Object.assign(body, this.septic);
                                  console.log(obj);
                                  postData();
                          });
                    });
                    const postData = (obj) => { 
                      fetch('./server.php', {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          septic: JSON.stringify(obj)
          
                      })
                          .then((response) => {
                              if (response.status !== 200){
                                  throw 'error';
                              }
                          return(response.json);
                      })
                      .then((response) => {
                      
                      })
                      .catch((error) => console.error(error));
                  };
                     
                };
    
        appData.start();

           
                    
           


    };
    colcAccordion();
    







});


