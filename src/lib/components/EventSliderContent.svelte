<script>
import { Swiper, SwiperSlide } from 'swiper/svelte';
import 'swiper/css';
import Events from '../dummy_data/Events';
</script>

<div class='event_slider_content'>
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
    {#each Events as event}
        <SwiperSlide>
            <div class='event_slider_card_wrapper'>
                <div class='event_card_image_wrapper'>
                    <img src={event.image} alt={event.name}/>
                </div>
            </div>
        </SwiperSlide>
    {/each}
  </Swiper>
</div>