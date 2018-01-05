/**
 * Created by junji on 2018/1/4.
 */

import Vue from 'vue'
import $ from 'jquery'

Vue.directive('wrapper',{
  inserted:function (el) {

    let perNum = 30;

    let offset = $(el).offset();
    let elW = $(el).innerWidth();
    let bodyW = $('body').innerWidth();


    function wrap(direction) {
      switch(direction){
        case 'left':
          offset.left -= perNum;

          if((offset.left*-1 + bodyW) > elW){
            offset.left = (elW-bodyW)*-1
          }

          break;
        case 'right':

          offset.left += perNum;
          if(offset.left>0){
            offset.left = 0
          }
          break;
      }
      $(el).offset(offset)
    }


    el.onmousewheel = function (event) {
      event.stopPropagation();
      let zoomDirection = event.wheelDelta;

      if(zoomDirection > 0){
        //向右
        console.log('向右')
        wrap('right')
      }else if(zoomDirection < 0){
        //向左
        console.log('向左')
        wrap('left')
      }



    }


  }
});
