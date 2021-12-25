$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 350 },
  {
    duration: 1500,
    postfix: "+"
  }
);
$("#num-2").animate(
  { number: 150 },
  {
    duration: 1500,
    postfix: "+"
  }
);
$("#num-3").animate(
  { number: 15 },
  {
    duration: 1500,
    postfix: "+"
  }
);
$("#num-4").animate(
  { number: 20 },
  {
    duration: 1500,
    postfix: "+"
  }
);

// $("#num-2")
//   .delay(500)
//   .animate(
//     { number: 5 },
//     {
//       duration: 2000,
//       postfix: "+"
//     }
//   );

// $("#num-3")
//   .delay(2000)
//   .animate(
//     { number: 300 },
//     {
//       duration: 5000,
//       postfix: "+"
//     }
//   );

// $("#num-4")
//   .delay(4000)
//   .animate(
//     { number: 50 },
//     {
//       duration: 5000,
//       postfix: "+"
//     }
//   );