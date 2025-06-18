import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  images = [
    {
      url: 'assets/slider1.png',
      title: 'Carefully made upholstery from the best materials',
      subtitle: 'We offer a variety of furniture'
    },
    {
      url: 'assets/slider2.png',
      title: 'Modern style and perfect finish',
      subtitle: 'Explore our new collection'
    },
    {
      url: 'assets/slider3.png',
      title: 'Comfort and elegance combined',
      subtitle: 'Your home, your rules'
    },
    {
      url: 'assets/slider1.png',
      title: 'Furnish your dreams with us',
      subtitle: 'Affordable luxury'
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // كل 3 ثوانٍ
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    clearInterval(this.intervalId);  // أوقف التشغيل التلقائي مؤقتًا عند الضغط
    this.startAutoSlide();          // ثم أعد تشغيله
  }


  prevSlide() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  clearInterval(this.intervalId);
  this.startAutoSlide();
}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  clearInterval(this.intervalId);
  this.startAutoSlide();
}

}


