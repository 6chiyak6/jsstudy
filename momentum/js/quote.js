const quotes = [
    {
      quote: "If I know what love is, it is because of you.",
      author: "Hermann Hesse",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow",
      author: "Leo Christopher",
    },
    {
      quote: "You make me want to be a better man.",
      author: "Melvin Udall",
    },
    {
      quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss",
    },
    {
      quote: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
      author: "J.R.R. Tolkien",
    },
    {
      quote: "Romance is the glamour which turns the dust of everyday life into a golden haze.",
      author: "Elinor Glyn",
    },
    {
      quote: "Love has nothing to do with what you are expecting to get–only with what you are expecting to give–which is everything",
      author: "Katharine Hepburn",
    },
    {
      quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
      author: "Nora Ephron",
    },
    {
      quote: "Love is an irresistible desire to be irresistibly desired.",
      author: "Robert Frost",
    },
    {
      quote: "The only thing we never get enough of is love; and the only thing we never give enough of is love",
      author: "Henry Miller",
    },
    {
      quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
      author: "Nora Ephron",
    },
    {
      quote: "It is the time you have wasted for your rose that makes your rose so important.",
      author: "Antoine de Saint-Exupéry",
    },
    {
      quote: "You become responsible, forever, for what you have tamed.",
      author: "Antoine de Saint-Exupéry",
    },
    {
      quote: "But if you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world",
      author: "Antoine de Saint-Exupéry",
    },
    {
      quote: "Hi my love I found all these quotes thinking about you. dreaming to tell you these words. I love you",
      author: "Your Loved one",
    },
    {
      quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
      author: "paulo coelho",
    },
    
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //round ceil floor 존재 
  
  quote.innerText = todaysQuote.quote+"\n";
  author.innerText = todaysQuote.author;