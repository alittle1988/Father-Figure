const blogs = [{name: 'My First Blog', content: `Hello world, My name is Andrew and this is my first blog.  I recently decided to start a blog about being a dad.  Something I could turn to to express my feelings, experiences, and just every day activities that I go through being a dad. As a dad most people look at you as the macho man. The one who’s supposed to teach you how to be rough, tough, wipe the dirt off, no crying, hard knocks type of stuff. I can tell you first hand that being a dad is waaaaayy more intense.  Not only is it the most exciting, fun, gratifying thing I have ever done.  It is also the most exhausting, draining, frustrating thing in 
the world!  I have gone from thinking I’m doing every thing right to everything wrong in a matter of minutes. 
Before I get into the in’s and out’s of my life let me tell you a little bit about myself.  Im a 32 years old 
loving husband and father of 3.   I have a boy my oldest Aspen. He is 5 and a half and has more energy than God 
put on this planet.   He likes to solve puzzles, play catch, camp, and pretty much anything that has to do with 
his dad. I also have two little girls.  Autumn and AJ are 3 and a half year old identical twins. They are their 
own Ying and Yang as well as  their dads whole heart. Autumn is the shy, sweet, ill melt your heart type of gal.  
AJ is the sneaky, I know how to get what I want, I love you type of gal. Then there is the Mrs.  she is the real MVP.  
Not only does she have to help raise these 3 crazy kids but put up with my shenanigans at the same time. Im sure 
we will dig a bit deeper into all of our personality’s as I continue to update and add new content.  I currently 
am a Busser at a restaurant in Las Vegas NV.   I like to stay active as well as keep my kids active as fitness and 
eating healthy is a big and important part of life. In this blog I will be bringing you guys along with me on this 
journey they call father hood. From the ups, downs, ins and outs, the good days, bad days, and everything in-between.`},
 { name: 'The Perfect Braid', content: `What is the perfect braid. To you it might be the flawless, not one hair sticking out,
 super tight, don't have to use product, I do this in my sleep type of braid. To me…. It’s the  I only had to re-do
  it 10 times not hearing ouch daddy more then once, mom didn’t have to do it type of braid. As easy as it may sound,
    It takes a lot of practice to achieve that second one. Let me explain to you from my point of view as a father.. 
    What the perfect braid to me is. For the longest time  my wife did our daughters hair.  At night before bed,
      in the morning to start our day(if necessary)  before pictures or just an outing like dinner that the girls
       wanted their hair up.  I just thought man that has to suck and to be honest a comment or two might have been 
       the spark plug.  Yet every day she’s the one that does their hair. she has never asked me, hey babe can you 
       braid their hair or honey you mind combing these tangles out so I can braid their hair. Almost like she wasn’t
        aloud to or its this unspoken thing that dads don’t do that. To tell you the truth I wasn’t cool with that.
         So its on! Starting that night. Every night I wasn’t working I’m the one that combed and braided their hair.
          Every time there was an opportunity I jumped on it. I was going to be the best hair braider on this side of
           the Blvd like hella tight.  You Vegas peeps know whats up! I started learning some tricks of the trade.
            Number one don’t dry their hair too much! It gets frizzy and then it gets all tangled in your huge fat
             sausage finger. Then you have to start all over again while they’re trying to read a book and you keep 
             pulling their hair yanking their head back and forth  looking like their at a metallic concert and nothing
              else matters. Twisting the group of hairs! GAME CHANGER! Helped soooo much. Twisting each group made a 
              tremendous difference. It stopped my fingers from grabbing the small strains from the other groups of hair. 
              Be sure to reference the first tip don’t dry it too much. That will also help those extra strands from 
              getting caught on your banana hands. Be patient and gentle it tends to get frustrating when you dont get 
              it the first couple times. Or they keep asking for mommy! Just try, From the first time  I braided my 
              daughters hair to the last time.  The two thing that makes me feel the best. Is the moment they ask for 
              dad to do their hair and the smile it puts on their face.  As well as knowing that  Not to mention the 
              your’re the best daddy ever I get from my little girls. My advice to all the dads out there is just try. 
              You’ll get better. You never really know how much of an impact your perfect braid can have.`}];


const titleFont = document.querySelector('.blogtitle')
const firstBlog = document.querySelector('#firstBlog');
const blogContent = document.querySelector('#blogtext');
const perfectBraid = document.querySelector('#perfectBraid');


firstBlog.addEventListener('click', function() {
    titleFont.textContent = blogs[0].name
    blogContent.textContent = blogs[0].content
    
    
})

perfectBraid.addEventListener('click', function () {
    titleFont.textContent = blogs[1].name
    blogContent.textContent = blogs[1].content
    
})
