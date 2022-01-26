function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    
    // Slider 1

    // const rightBut = document.querySelector('.offer__slider-next');
    // const leftBut = document.querySelector('.offer__slider-prev');
    // const images = document.querySelectorAll('.offer__slide');
    // const spanText = document.querySelector('#current');
    // const spanText2 = document.querySelector('#total');
    // console.log(spanText);
    // const all = images.length;
    // let current = 0;

    // if (all < 10) {
    //     spanText2.textContent = `0${all}`;
    // }
    // else {
    //     spanText2.textContent = all;
    // }

    // images.forEach((img) => {
    //     img.style.display = 'none';
    // });

    // images[0].style.display = 'block';

    // rightBut.addEventListener('click', () => {
    //     if (current < all-1) {
    //         current++;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    //     else {
    //         current = 0;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         spanText.textContent = `0${current+1}`;
    //     }
    // });

    // leftBut.addEventListener('click', () => {
    //     if (current > 0) {
    //         current--;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    //     else {
    //         current = all-1;
    //         images.forEach((img) => {
    //             img.style.display = 'none';
    //         });
    //         images[current].style.display = 'block';
    //         if (current < 10) {
    //             spanText.textContent = `0${current+1}`;
    //         }
    //         else{
    //             spanText.textContent = `${current+1}`;
    //         }
    //     }
    // });



    // Slider 2 and Navigation for slider
    
    const rightBut = document.querySelector(nextArrow),
        leftBut = document.querySelector(prevArrow),
        images = document.querySelectorAll(slide),
        total = document.querySelector(totalCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let ind = 0,
        current = document.querySelector(currentCounter);

    slidesField.style.width = 100 * images.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    images.forEach((slide) => {
        slide.style.width = width;
    });

    const slider = document.querySelector(container);
    slider.style.position = 'relative';

    const divOfDots = document.createElement('div');
    divOfDots.classList.add('carousel-indicators');
    slider.append(divOfDots);

    const countOfSlides = images.length;

    for (let i = 0; i < countOfSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        divOfDots.append(dot);
    }

    const dots = document.querySelectorAll('.dot');
    dots[ind].style.opacity = '1';

    rightBut.addEventListener('click', () => {
        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        if (ind < images.length-1) {
            ind++;
            slidesField.style.transform = `translateX(-${25*ind}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
        else {
            ind = 0;
            slidesField.style.transform = `translateX(-${25*ind}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
    });

    leftBut.addEventListener('click', () => {
        dots.forEach((dot) => {
            dot.style.opacity = '.5';
        });
        if (ind > 0) {
            ind--;
            slidesField.style.transform = `translateX(-${25*(ind)}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
        else {
            ind = images.length-1;
            slidesField.style.transform = `translateX(-${25*(ind)}%)`;
            dots[ind].style.opacity = '1';
            if (ind < 10) {
                current.textContent = `0${ind+1}`;
            }
            else{
                current.textContent = `${ind+1}`;
            }
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach((dot) => {
                dot.style.opacity = '.5';
            });
            dots[index].style.opacity = '1';
            slidesField.style.transform = `translateX(-${25*index}%)`;
            if (index < 10) {
                current.textContent = `0${index+1}`;
            }
            else{
                current.textContent = `${index+1}`;
            }
        });
    });
}

export default slider;