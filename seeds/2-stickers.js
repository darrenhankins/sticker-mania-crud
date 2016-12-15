
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "sticker"; ALTER SEQUENCE user_id_seq RESTART WITH 7;')
    .then(function () {
      const stickers = [{
        id: 1,
        description: "Baby dinosaur monster",
        image_url: 'http://www.printroo.com.au/wp-content/uploads/2013/06/sticker_1024x1024.jpg',
        quantity: 4,
        size: 'L',
        user_id: 1
      }, {
        id: 2,
        description: "Psychedelic skull ooze",
        image_url: 'http://d6ce0no7ktiq.cloudfront.net/images/preview/2015/09/21/design-4972/template-sticker-300x300.png',
        quantity: 8,
        size: 'M',
        user_id: 1
      }, {
        id: 3,
        description: "Penis pinching keyboard",
        image_url: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/5278/large/1429993470/threatbutt-enterprise-license-sticker-of-authenticity.png',
        quantity: 1,
        size: 'S',
        user_id: 1
      }, {
        id: 4,
        description: "Cross-eyed penguin",
        image_url: 'http://www.unixstickers.com/image/data/stickers/little-tux/little-tux.sh.png',
        quantity: 10,
        size: 'M',
        user_id: 2
      }, {
        id: 5,
        description: "Angry badass crocodile",
        image_url: 'http://i2.wp.com/messagesstickers.com/wp-content/uploads/2016/06/Gator-Free-iOS-Sticker-Messages-Pack.jpg?fit=400%2C400',
        quantity: 2,
        size: 'L',
        user_id: 2
      }, {
        id: 6,
        description: "Metal Santa rules the world",
        image_url: 'https://ih1.redbubble.net/image.154978558.6102/sticker,220x200-pad,220x200,ffffff.u1.jpg',
        quantity: 12,
        size: 'S',
        user_id: 2
      }, ];
      return knex('sticker').insert(stickers);
    });
};
