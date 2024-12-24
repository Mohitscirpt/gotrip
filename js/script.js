let currentIndex = 0;

        function moveSlide(direction) {
            const sliderWrapper = document.querySelector('.slider-wrapper');
            const slides = document.querySelectorAll('.slide');
            const slideWidth = slides[0].clientWidth;
            currentIndex += direction;

            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            } else if (currentIndex >= slides.length) {
                currentIndex = 0;
            }

            sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }