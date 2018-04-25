// Generer aleatoirement des biere de differente teneur en aclool

$(document).ready(function() {
    // Afficher la première page de bière 
    $('#a').on('click', function() {
        $('.loading-container').removeClass('hidden');

        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers/random", function(data) {     
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementEBC = document.createElement('h3')
            elementEBC.classList.add('beerAlcool')
            let elementAlcool = document.createElement('h3')
            elementAlcool.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (data[0].image_url == undefined) {
                console.log('pas image');
            } else { 
                imageBeer.src = data[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = data[0].name;
            elementTagline.innerHTML = data[0].tagline;
            elementDescription.innerHTML = data[0].description;
            elementEBC.innerHTML = data[0].ebc;
            elementAlcool.innerHTML = data[0].abv;
            let textEBC = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
            let textTauxAlcool = document.createTextNode(" Est  le taux d'alcool contenue dans la bière");
            elementEBC.append(textEBC);
            elementAlcool.append(textTauxAlcool);
            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementEBC);
            containerDiv2.append(elementAlcool);
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            
            $('#resultList').html(containerDiv);  
            $('.loading-container').addClass('hidden');   
        });
    });


    $('#b').on('click', function() {
        $('.loading-container').removeClass('hidden'); 
        $('main').empty();
        // Afficher une liste des bieres à moins de 6 degrer d'alcool 
        $.get("https://api.punkapi.com/v2/beers?abv_lt=6", function(response) { 
            let list = document.createElement('ul');
            list.classList.add('listStyle')
            let listContainer = document.createElement('div');
            listContainer.classList.add('test')
       //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
         //       listContainer.append(textTauxAlcool);

            for (let i = 0; i < response.length; i++) {                                        
                let listElement = document.createElement('li');
                let listElementTA = document.createElement('li');
                listElementTA.classList.add('tauxAlcool');             
                listElement.classList.add('noneDecoration');               
                listElement.innerHTML = response[i].name;      
                listElement.dataset.id = response[i].id;
                listElementTA.innerHTML = response[i].abv;
                listElement.append(listElementTA);
                list.append(listElement);    
           
                };

                listContainer.append(list);                        
                $('#resultList').append(listContainer);
                $('.loading-container').addClass('hidden');          
                
            // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
            $('body').on('click', '.noneDecoration', function () {  
                $('.loading-container').removeClass('hidden');
                $('main').empty();  
                $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) {
                
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('beerInfo');
                let containerDiv2 = document.createElement('div');
                containerDiv2.classList.add('beerInfo2');
                let elementName = document.createElement('h2');  
                elementName.classList.add('beerName');      
                let elementTagline = document.createElement('h4');
                elementTagline.classList.add('beerTagline');
                let elementDescription = document.createElement('p');
                elementDescription.classList.add('beerDescription');
                let elementAlcool = document.createElement('h3')
                elementAlcool.classList.add('beerAlcool')
                let imageBeer = document.createElement('img');
                imageBeer.classList.add('beerImg');

                if (data[0].image_url == undefined) {
                    console.log('pas image');
                } else { 
                    imageBeer.src = data[0].image_url; // ajouter une image à la variable
                }
                elementName.innerHTML = data[0].name;
                elementTagline.innerHTML = data[0].tagline;
                elementDescription.innerHTML = data[0].description;
                elementAlcool.innerHTML = data[0].abv;
            

                containerDiv2.append(elementName);
                containerDiv2.append(elementTagline);
                containerDiv2.append(elementDescription);
                containerDiv2.append(elementAlcool)
                containerDiv.append(containerDiv2);
                containerDiv.append(imageBeer);
                

                $('#resultList').html(containerDiv);
                $('.loading-container').addClass('hidden');
                })            
             })
         })
     })

    $('#c').on('click', function() {
        $('.loading-container').removeClass('hidden');  
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?abv_lt=10&abv_gt=6", function(response) { 
            let list = document.createElement('ul');
            list.classList.add('listStyle')
            let listContainer = document.createElement('div');
            listContainer.classList.add('test')
       //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
         //       listContainer.append(textTauxAlcool);

            for (let i = 0; i < response.length; i++) {                                        
                let listElement = document.createElement('li');
                let listElementTA = document.createElement('li');
                listElementTA.classList.add('tauxAlcool');             
                listElement.classList.add('noneDecoration');               
                listElement.innerHTML = response[i].name;      
                listElement.dataset.id = response[i].id;
                listElementTA.innerHTML = response[i].abv;
                listElement.append(listElementTA);
                list.append(listElement);    
           
                };

                listContainer.append(list);                        
                $('#resultList').append(listContainer);  
                $('.loading-container').addClass('hidden');       
                
            // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
            $('body').on('click', '.noneDecoration', function () {  
                $('.loading-container').removeClass('hidden'); 
                $('main').empty();  
                $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) {  
            
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementAlcool = document.createElement('h3')
            elementAlcool.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (data[0].image_url == undefined) {
                console.log('pas image');
              } else { 
                imageBeer.src = data[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = data[0].name;
            elementTagline.innerHTML = data[0].tagline;
            elementDescription.innerHTML = data[0].description;
            elementAlcool.innerHTML = data[0].abv;
        

            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementAlcool)
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            

            $('#resultList').html(containerDiv);
            $('.loading-container').addClass('hidden');
         });         
        });
      });
   });
  
    $('#d').on('click', function() {
        $('.loading-container').removeClass('hidden'); 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?abv_gt=10", function(response) { 
            let list = document.createElement('ul');
            list.classList.add('listStyle')
            let listContainer = document.createElement('div');
            listContainer.classList.add('test')
       //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
         //       listContainer.append(textTauxAlcool);

            for (let i = 0; i < response.length; i++) {                                        
                let listElement = document.createElement('li');
                let listElementTA = document.createElement('li');
                listElementTA.classList.add('tauxAlcool');             
                listElement.classList.add('noneDecoration');               
                listElement.innerHTML = response[i].name;      
                listElement.dataset.id = response[i].id;
                listElementTA.innerHTML = response[i].abv;
                listElement.append(listElementTA);
                list.append(listElement);    
                };

                listContainer.append(list);                        
                $('#resultList').append(listContainer);  
                $('.loading-container').addClass('hidden'); 
                     
                
            // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
            $('body').on('click', '.noneDecoration', function () {  
                $('.loading-container').removeClass('hidden'); 
                $('main').empty();  
                $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) { 
            
                    let containerDiv = document.createElement('div');
                    containerDiv.classList.add('beerInfo');
                    let containerDiv2 = document.createElement('div');
                    containerDiv2.classList.add('beerInfo2');
                    let elementName = document.createElement('h2');  
                    elementName.classList.add('beerName');      
                    let elementTagline = document.createElement('h4');
                    elementTagline.classList.add('beerTagline');
                    let elementDescription = document.createElement('p');
                    elementDescription.classList.add('beerDescription');
                    let elementAlcool = document.createElement('h3')
                    elementAlcool.classList.add('beerAlcool')
                    let imageBeer = document.createElement('img');
                    imageBeer.classList.add('beerImg');

                    if (data[0].image_url == undefined) {
                        console.log('pas image');
                    } else { 
                        imageBeer.src = data[0].image_url; // ajouter une image à la variable
                    }
                    elementName.innerHTML = response[0].name;
                    elementTagline.innerHTML = response[0].tagline;
                    elementDescription.innerHTML = response[0].description;
                    elementAlcool.innerHTML = response[0].abv;
                

                    containerDiv2.append(elementName);
                    containerDiv2.append(elementTagline);
                    containerDiv2.append(elementDescription);
                    containerDiv2.append(elementAlcool)
                    containerDiv.append(containerDiv2);
                    containerDiv.append(imageBeer);
                    

                    $('#resultList').html(containerDiv);
                    $('.loading-container').addClass('hidden');
        });         
      });
    });
});
  $('#e').on('click', function() { 
    $('.loading-container').removeClass('hidden'); 
    $('main').empty();
    // Afficher une liste des bieres à moins de 6 degrer d'alcool 
    $.get("https://api.punkapi.com/v2/beers?ebc_lt=8", function(response) { 
        let list = document.createElement('ul');
        list.classList.add('listStyle')
        let listContainer = document.createElement('div');
        listContainer.classList.add('test')
   //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
     //       listContainer.append(textTauxAlcool);

        for (let i = 0; i < response.length; i++) {                                        
            let listElement = document.createElement('li');
            let listElementEBC = document.createElement('li');
            listElementEBC.classList.add('tauxAlcool');             
            listElement.classList.add('noneDecoration');               
            listElement.innerHTML = response[i].name;      
            listElement.dataset.id = response[i].id;
            listElementEBC.innerHTML = response[i].ebc;
            listElement.append(listElementEBC);
            list.append(listElement);    
            };

            listContainer.append(list);                        
            $('#resultList').append(listContainer);
            $('.loading-container').addClass('hidden');         
            
        // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
        $('body').on('click', '.noneDecoration', function () {  
            $('.loading-container').removeClass('hidden'); 
            $('main').empty();  
            $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) {
            
            
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('beerInfo');
                let containerDiv2 = document.createElement('div');
                containerDiv2.classList.add('beerInfo2');
                let elementName = document.createElement('h2');  
                elementName.classList.add('beerName');      
                let elementTagline = document.createElement('h4');
                elementTagline.classList.add('beerTagline');
                let elementDescription = document.createElement('p');
                elementDescription.classList.add('beerDescription');
                let elementEBC = document.createElement('h3')
                elementEBC.classList.add('beerAlcool')
                let imageBeer = document.createElement('img');
                imageBeer.classList.add('beerImg');
    
                if (data[0].image_url == undefined) {
                    console.log('pas image');
                } else { 
                    imageBeer.src = data[0].image_url; // ajouter une image à la variable
                }
                elementName.innerHTML = data[0].name;
                elementTagline.innerHTML = data[0].tagline;
                elementDescription.innerHTML = data[0].description;
                elementEBC.innerHTML = data[0].ebc;
                let textTauxAlcool = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
                elementEBC.append(textTauxAlcool);
                containerDiv2.append(elementName);
                containerDiv2.append(elementTagline);
                containerDiv2.append(elementDescription);
                containerDiv2.append(elementEBC)
                containerDiv.append(containerDiv2);
                containerDiv.append(imageBeer);
                
            

            $('#resultList').html(containerDiv);
            $('.loading-container').addClass('hidden');
            })            
         })
     })
 })

$('#f').on('click', function() { 
    $('.loading-container').removeClass('hidden'); 
    $('main').empty();
    $.get("https://api.punkapi.com/v2/beers?ebc_lt=20&ebc_gt=8", function(response) { 
        let list = document.createElement('ul');
        list.classList.add('listStyle')
        let listContainer = document.createElement('div');
        listContainer.classList.add('test')
      
   //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
     //       listContainer.append(textTauxAlcool);

        for (let i = 0; i < response.length; i++) {                                        
            let listElement = document.createElement('li');
            let listElementEBC = document.createElement('li');
            listElementEBC.classList.add('tauxAlcool');             
            listElement.classList.add('noneDecoration');               
            listElement.innerHTML = response[i].name;      
            listElement.dataset.id = response[i].id;
            listElementEBC.innerHTML = response[i].ebc;
            listElement.append(listElementEBC);
            list.append(listElement);    
            };

            listContainer.append(list);                        
            $('#resultList').append(listContainer); 
            $('.loading-container').addClass('hidden');        
            
        // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
        $('body').on('click', '.noneDecoration', function () {  
            $('.loading-container').removeClass('hidden'); 
            $('main').empty();  
            $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) {
            
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('beerInfo');
            let containerDiv2 = document.createElement('div');
            containerDiv2.classList.add('beerInfo2');
            let elementName = document.createElement('h2');  
            elementName.classList.add('beerName');      
            let elementTagline = document.createElement('h4');
            elementTagline.classList.add('beerTagline');
            let elementDescription = document.createElement('p');
            elementDescription.classList.add('beerDescription');
            let elementEBC = document.createElement('h3')
            elementEBC.classList.add('beerAlcool')
            let imageBeer = document.createElement('img');
            imageBeer.classList.add('beerImg');

            if (data[0].image_url == undefined) {
                console.log('pas image');
            } else { 
                imageBeer.src = data[0].image_url; // ajouter une image à la variable
            }
            elementName.innerHTML = data[0].name;
            elementTagline.innerHTML = data[0].tagline;
            elementDescription.innerHTML = data[0].description;
            elementEBC.innerHTML = data[0].ebc;
            let textTauxAlcool = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
            elementEBC.append(textTauxAlcool);
            containerDiv2.append(elementName);
            containerDiv2.append(elementTagline);
            containerDiv2.append(elementDescription);
            containerDiv2.append(elementEBC)
            containerDiv.append(containerDiv2);
            containerDiv.append(imageBeer);
            

            $('#resultList').html(containerDiv);
            $('.loading-container').addClass('hidden');
            })            
         })
     })
 })

$('#g').on('click', function() { 
    $('.loading-container').removeClass('hidden'); 
    $('main').empty();
    $.get("https://api.punkapi.com/v2/beers?ebc_lt=45&ebc_gt=21", function(response) { 
        let list = document.createElement('ul');
        list.classList.add('listStyle')
        let listContainer = document.createElement('div');
        listContainer.classList.add('test')
   //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
     //       listContainer.append(textTauxAlcool);

        for (let i = 0; i < response.length; i++) {                                        
            let listElement = document.createElement('li');
            let listElementEBC = document.createElement('li');
            listElementEBC.classList.add('tauxAlcool');             
            listElement.classList.add('noneDecoration');               
            listElement.innerHTML = response[i].name;      
            listElement.dataset.id = response[i].id;
            listElementEBC.innerHTML = response[i].ebc;
            listElement.append(listElementEBC);
            list.append(listElement);    
            };

            listContainer.append(list);                        
            $('#resultList').append(listContainer); 
            $('.loading-container').addClass('hidden');        
            
        // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
        $('body').on('click', '.noneDecoration', function () {  
            $('.loading-container').removeClass('hidden'); 
            $('main').empty();  
            $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) { 
        
            
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('beerInfo');
                let containerDiv2 = document.createElement('div');
                containerDiv2.classList.add('beerInfo2');
                let elementName = document.createElement('h2');  
                elementName.classList.add('beerName');      
                let elementTagline = document.createElement('h4');
                elementTagline.classList.add('beerTagline');
                let elementDescription = document.createElement('p');
                elementDescription.classList.add('beerDescription');
                let elementEBC = document.createElement('h3')
                elementEBC.classList.add('beerAlcool')
                let imageBeer = document.createElement('img');
                imageBeer.classList.add('beerImg');
    
                if (data[0].image_url == undefined) {
                    console.log('pas image');
                } else { 
                    imageBeer.src = data[0].image_url; // ajouter une image à la variable
                }
                elementName.innerHTML = data[0].name;
                elementTagline.innerHTML = data[0].tagline;
                elementDescription.innerHTML = data[0].description;
                elementEBC.innerHTML = data[0].ebc;
                let textTauxAlcool = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
                elementEBC.append(textTauxAlcool);
                containerDiv2.append(elementName);
                containerDiv2.append(elementTagline);
                containerDiv2.append(elementDescription);
                containerDiv2.append(elementEBC)
                containerDiv.append(containerDiv2);
                containerDiv.append(imageBeer);
                
                $('#resultList').html(containerDiv);
                $('.loading-container').addClass('hidden');
            });         
        });
     });
    });
    $('#h').on('click', function() { 
        $('.loading-container').removeClass('hidden'); 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?ebc_lt=110&ebc_gt=45", function(response) { 
        let list = document.createElement('ul');
        list.classList.add('listStyle')
        let listContainer = document.createElement('div');
        listContainer.classList.add('test')
    //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
        //       listContainer.append(textTauxAlcool);

        for (let i = 0; i < response.length; i++) {                                        
            let listElement = document.createElement('li');
            let listElementEBC = document.createElement('li');
            listElementEBC.classList.add('tauxAlcool');             
            listElement.classList.add('noneDecoration');               
            listElement.innerHTML = response[i].name;      
            listElement.dataset.id = response[i].id;
            listElementEBC.innerHTML = response[i].ebc;
            listElement.append(listElementEBC);
            list.append(listElement);    
            };

            listContainer.append(list);                        
            $('#resultList').append(listContainer);  
            $('.loading-container').addClass('hidden');       
            
        // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
        $('body').on('click', '.noneDecoration', function () {  
            $('.loading-container').removeClass('hidden'); 
            $('main').empty();  
            $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) { 
        
            
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('beerInfo');
                let containerDiv2 = document.createElement('div');
                containerDiv2.classList.add('beerInfo2');
                let elementName = document.createElement('h2');  
                elementName.classList.add('beerName');      
                let elementTagline = document.createElement('h4');
                elementTagline.classList.add('beerTagline');
                let elementDescription = document.createElement('p');
                elementDescription.classList.add('beerDescription');
                let elementEBC = document.createElement('h3')
                elementEBC.classList.add('beerAlcool')
                let imageBeer = document.createElement('img');
                imageBeer.classList.add('beerImg');
    
                if (data[0].image_url == undefined) {
                    console.log('pas image');
                } else { 
                    imageBeer.src = data[0].image_url; // ajouter une image à la variable
                }
                elementName.innerHTML = data[0].name;
                elementTagline.innerHTML = data[0].tagline;
                elementDescription.innerHTML = data[0].description;
                elementEBC.innerHTML = data[0].ebc;
                let textTauxAlcool = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
                elementEBC.append(textTauxAlcool);
                containerDiv2.append(elementName);
                containerDiv2.append(elementTagline);
                containerDiv2.append(elementDescription);
                containerDiv2.append(elementEBC)
                containerDiv.append(containerDiv2);
                containerDiv.append(imageBeer);
                
                $('#resultList').html(containerDiv);
                $('.loading-container').addClass('hidden');
            });         
         });
        });
    });  
    $('#i').on('click', function() { 
        $('.loading-container').removeClass('hidden'); 
        $('main').empty();
        $.get("https://api.punkapi.com/v2/beers?ebc_gt=110", function(response) { 
        let list = document.createElement('ul');
        list.classList.add('listStyle')
        let listContainer = document.createElement('div');
        listContainer.classList.add('test')
    //     let textTauxAlcool = document.createTextNode("Vous pouvez choisir une bière parmis la liste en fonction de sont Taux d'alcool");
        //       listContainer.append(textTauxAlcool);

        for (let i = 0; i < response.length; i++) {                                        
            let listElement = document.createElement('li');
            let listElementEBC = document.createElement('li');
            listElementEBC.classList.add('tauxAlcool');             
            listElement.classList.add('noneDecoration');               
            listElement.innerHTML = response[i].name;      
            listElement.dataset.id = response[i].id;
            listElementEBC.innerHTML = response[i].ebc;
            listElement.append(listElementEBC);
            list.append(listElement);    
            };

            listContainer.append(list);                        
            $('#resultList').append(listContainer); 
            $('.loading-container').addClass('hidden');        
            
        // Quand on clique sur l'une des bière de la liste on afficher la bière en question  
        $('body').on('click', '.noneDecoration', function () {  
            $('.loading-container').removeClass('hidden'); 
            $('main').empty();  
            $.get(('https://api.punkapi.com/v2/beers/' + this.dataset.id ), function (data) { 
        
            
                let containerDiv = document.createElement('div');
                containerDiv.classList.add('beerInfo');
                let containerDiv2 = document.createElement('div');
                containerDiv2.classList.add('beerInfo2');
                let elementName = document.createElement('h2');  
                elementName.classList.add('beerName');      
                let elementTagline = document.createElement('h4');
                elementTagline.classList.add('beerTagline');
                let elementDescription = document.createElement('p');
                elementDescription.classList.add('beerDescription');
                let elementEBC = document.createElement('h3')
                elementEBC.classList.add('beerAlcool')
                let imageBeer = document.createElement('img');
                imageBeer.classList.add('beerImg');
    
                if (data[0].image_url == undefined) {
                    console.log('pas image');
                } else { 
                    imageBeer.src = data[0].image_url; // ajouter une image à la variable
                }
                elementName.innerHTML = data[0].name;
                elementTagline.innerHTML = data[0].tagline;
                elementDescription.innerHTML = data[0].description;
                elementEBC.innerHTML = data[0].ebc;
                let textTauxAlcool = document.createTextNode(" Est  le taux d'EBC contenue dans la bière");
                elementEBC.append(textTauxAlcool);
                containerDiv2.append(elementName);
                containerDiv2.append(elementTagline);
                containerDiv2.append(elementDescription);
                containerDiv2.append(elementEBC)
                containerDiv.append(containerDiv2);
                containerDiv.append(imageBeer);
                
                $('#resultList').html(containerDiv);
                $('.loading-container').addClass('hidden');
            });         
         });
        });
    });  
});


/* let list = document.createElement('ul')
for (let i = 0; i < response.length; i++) {
  let listElement = document.createElement('li');
  listElement.classList.add('noneDecoration')
  listElement.innerHTML = response[i].name;
  list.append(listElement);     
};   */

//https://api.punkapi.com/v2/beers?abv_lt=6&abv_gt=7 gérée les ajout de parametre 
