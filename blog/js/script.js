let profile_name, proflie_img, profile_avatar, intro_main, intro_sub;

window.onload = function(){
  init();
  SetProfile();
  Blog_Write_Post();
}

function SetProfile(){
  document.title =  "Xenophics";
  profile_name.innerHTML = "Xenophics";
  profile_avatar.src = "./avatar.gif";
  intro_main.innerHTML = "ALL HELL BREAKS LOOSE IN 2023<br>—DIABLO IV IS COMING";
  intro_sub.innerHTML = "During the 2022 Xbox Games Showcase Event we told the story of an unremitting conflict between the Burning Hells and High Heavens, foretold the return of Lilith, Sanctuary’s demonic creator, and shared scorching-hot details around the next installment in the Diablo saga—Diablo IV. Before you read further, we are excited to announce that Diablo IV will launch in 2023 on Windows PC, Xbox One X|S, Xbox Series X|S, PlayStation 4/5 and will host cross-play and cross-progression for all platforms. On console, players may also slay demons side-by-side with a friend through couch-co-op. We have another bone-chilling announcement: in addition to the Barbarian, Druid, Rogue, and Sorceress, the fifth and final class available at launch is the scythe-wielding purveyor of death, the Necromancer!";
}
function init(){
  profile_name = document.querySelector('#nickname');
  profile_avatar = document.querySelector('#profile_avatar');
  intro_main = document.querySelector('#intro_main');
  intro_sub = document.querySelector('#intro_sub');
}

function Blog_Write_Post(){
  var Blog_Post_Info = document.getElementById('blog');
  var Dummy_Text = `
  <div class="column-xs-12 column-sm-6 portfolio-item">
  <a href="#">
    <figure>
      <img src="aa">
      <figcaption>
        <h3>Project Title</h3>
        <p style="margin-top: 10px;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
      </figcaption>
    </figure>
  </a>`;
  Blog_Post_Info.innerHTML += Dummy_Text;
}