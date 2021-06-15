const products = [
  {

    name: 'Anna Karenina',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91F9WNEThJL.jpg',
    description:
      "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endure the hypocrisies of society. Set against a vast and richly textured canvas of nineteenth-century Russia, the novel's seven major characters create a dynamic imbalance, playing out the contrasts of city and country life and all the variations on love and family happiness. While previous versions have softened the robust, and sometimes shocking, quality of Tolstoy's writing, Pevear and Volokhonsky have produced a translation true to his powerful voice. This award-winning team's authoritative edition also includes an illuminating introduction and explanatory notes. Beautiful, vigorous, and eminently readable, this Anna Karenina will be the definitive text for generations to come.",
    author: 'Leo Tolstoy',
    catagory: 'Fiction',
    publisher: "",
    publishDate: "",
    price: 18.97,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {

    name: 'Thick',
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546512057l/40365093.jpg",
    description:
      "And Other Essays is a 2019 collection of essays by the American sociologist, professor, and writer Tressie McMillan Cottom. The book explores a range of topics including, Black womanhood, body image, and McMillan Cottom's experience as a Southern Black woman academic.",
    author: 'Tressie McMillan Cottom',
    catagory: 'Essays',
    publisher: "",
    publishDate: "January 8, 2019",
    price: 7.5,
    countInStock: 5,
    rating: 3.5,
    numReviews: 10,
  },
  {

    name: 'The Mothers',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460652458l/28815371.jpg',
    description:
      "It is the last season of high school life for Nadia Turner, a rebellious, grief-stricken, seventeen-year-old beauty. Mourning her own mother's recent suicide, she takes up with the local pastor's son. Luke Sheppard is twenty-one, a former football star whose injury has reduced him to waiting tables at a diner. They are young; it's not serious. But the pregnancy that results from this teen romance—and the subsequent cover-up—will have an impact that goes far beyond their youth. As Nadia hides her secret from everyone, including Aubrey, her God-fearing best friend, the years move quickly. Soon, Nadia, Luke, and Aubrey are full-fledged adults and still living in debt to the choices they made that one seaside summer, caught in a love triangle they must carefully maneuver, and dogged by the constant, nagging question: What if they had chosen differently? The possibilities of the road not taken are a relentless haunt.",
    author: 'Brit Bennett ',
    catagory: 'Fiction',
    publisher: "",
    publishDate: "",
    price: 12.97,
    countInStock: 3,
    rating: 3.5,
    numReviews: 8,
  },
  {

    name: 'All the Lives We Ever Lived',
    image: 'https://lithub.com/wp-content/uploads/2019/11/91SGcvBluiL-683x1024.jpg',
    description:
      "(Katharine Smyth was a student at Oxford when she first read Virginia Woolf's modernist masterpiece To the Lighthouse in the comfort of an English sitting room, and in the companionable silence she shared with her father. After his death--a calamity that claimed her favorite person--she returned to that beloved novel as a way of wrestling with his memory and understanding her own grief. Smyth's story moves between the New England of her childhood and Woolf's Cornish shores and Bloomsbury squares, exploring universal questions about family, loss, and homecoming.",
    author: 'Katharine Smyth',
    catagory: 'Fiction',
    publisher: "",
    publishDate: "",
    price: 10.70,
    countInStock: 10,
    rating: 3,
    numReviews: 12,
  },
  {

    name: 'Hidden Valley Road',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1569289026l/50088631._SX318_SY475_.jpg',
    description:
      "The heartrending story of a midcentury American family with twelve children, six of them diagnosed with schizophrenia, that became science's great hope in the quest to understand the disease. Don and Mimi Galvin seemed to be living the American dream. After World War II, Don's work with the Air Force brought them to Colorado, where their twelve children perfectly spanned the baby boom: the oldest born in 1945, the youngest in 1965. In those years, there was an established script for a family like the Galvins—aspiration, hard work, upward mobility, domestic harmony—and they worked hard to play their parts. But behind the scenes was a different story: psychological breakdown, sudden shocking violence, hidden abuse. By the mid-1970s, six of the ten Galvin boys, one after another, were diagnosed as schizophrenic. How could all this happen to one family?",
    author: 'Robert Kolker ',
    catagory: 'Novek',
    publisher: "",
    publishDate: "",
    price: 18.67,
    countInStock: 12,
    rating: 4,
    numReviews: 10,
  },
  {

    name: 'Say Nothing',
    image: 'https://lithub.com/wp-content/uploads/2019/10/A1sLoZpVaoL-681x1024.jpg',
    description:
      "In December 1972, Jean McConville, a thirty-eight-year-old mother of ten, was dragged from her Belfast home by masked intruders, her children clinging to her legs. They never saw her again. Her abduction was one of the most notorious episodes of the vicious conflict known as The Troubles. Everyone in the neighborhood knew the I.R.A. was responsible. But in a climate of fear and paranoia, no one would speak of it. In 2003, five years after an accord brought an uneasy peace to Northern Ireland, a set of human bones was discovered on a beach. McConville's children knew it was their mother when they were told a blue safety pin was attached to the dress--with so many kids, she had always kept it handy for diapers or ripped clothes.",
    author: ' Patrick Radden Keefe',
    catagory: 'Fiction',
    publisher: "",
    publishDate: "",
    price: 15.00,
    countInStock: 6,
    rating: 4.5,
    numReviews: 18,
  },
  {

    name: 'The New Me',
    image: 'https://lithub.com/wp-content/uploads/2019/11/A1MX00mdOL-669x1024.jpg',
    description:
      "I m still trying to make the dream possible: still might finish my cleaning project, still might sign up for that yoga class, still might, still might. I step into the shower and almost faint, an image of taking the day by the throat and bashing its head against the wall floating in my mind. Thirty-year-old Millie just can t pull it together. Misanthropic and morose, she spends her days killing time at a thankless temp job until she can return home to her empty apartment, where she oscillates wildly between self-recrimination and mild delusion, fixating on all the little ways she might change her life. Then she watches TV until she drops off to sleep, and the cycle begins again.",
    author: 'Halle Butler',
    catagory: 'Novel',
    publisher: "",
    publishDate: "",
    price: 11.97,
    countInStock: 10,
    rating: 3.5,
    numReviews: 15,
  },
  {

    name: 'Crossing',
    image: 'https://lithub.com/wp-content/uploads/2019/09/71wySuLKjcL-693x1024.jpg',
    description:
      "In the devastation of post-Communist Albania, inseparable young friends Bujar and Agim feel trapped: Bujar struggling to come to terms with the loss of his father, Agim facing dangerous realizations about his sexuality and his feelings for Bujar. When shame, guilt, and the ruins of authoritarianism push Bujar and Agim to leave everything behind and flee to Italy, the unfamiliar life of an immigrant and asylum seeker sets Bujar on a path of reinvention. He follows an impulse to remake himself--as a man or woman of infinite nationalities and pasts--the burning desire to be seen and heard spurring a desperate search for a different existence to be seized at any cost. But Bujar's quest for identity and belonging is haunted by the mystery of what happened to Agim--his one, true beloved, who somehow got lost along the way.",
    author: ' Pajtim Statovci',
    catagory: 'Novel',
    publisher: "",
    publishDate: "",
    price: 8.97,
    countInStock: 0,
    rating: 4.5,
    numReviews: 9,
  },
]

export default products;
