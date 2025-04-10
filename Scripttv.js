const categories = [
      "Local", "Sports", "News", "Movies", "Kids", "Educational and Documentary", "Lifestyle"
    ];

    let player;

    function initializeUI() {
      const categoriesContainer = document.getElementById("categories");

      categories.forEach(category => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("category");
        categoryElement.id = `category-${category.toLowerCase().replace(/\s/g, '-')}`;
        categoryElement.innerHTML = `
          <div class="category-title">${category}</div>
          <div class="channel-slider-wrapper">
            <button class="arrow-button arrow-left" onclick="scrollSlider('${categoryElement.id}', 'left')">&#8249;</button>
            <div class="channel-slider"></div>
            <button class="arrow-button arrow-right" onclick="scrollSlider('${categoryElement.id}', 'right')">&#8250;</button>
          </div>
        `;
        categoriesContainer.appendChild(categoryElement);

        // Populate channels in each category
        const slider = categoryElement.querySelector(".channel-slider");
        const categoryChannels = streams.filter(stream => stream.category === category);
        categoryChannels.forEach(channel => {
          const card = document.createElement("div");
          card.classList.add("channel-card");
          card.onclick = () => loadStream(channel);
          card.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}" class="channel-logo">
            <div class="channel-name">${channel.name}</div>
          `;
          slider.appendChild(card);
        });
      });

      loadStream(streams[0]); // Autoplay the first channel
    }

    async function loadStream(channel) {
      const videoElement = document.getElementById("video");
      const youtubeElement = document.getElementById("youtube-video");

      stopCurrentStream();

      if (channel.type === "mpegdash") {
        if (!player) player = new shaka.Player(videoElement);
        player.configure({ drm: { clearKeys: channel.clearKey } });
        await player.load(channel.manifestUri);
        videoElement.style.display = "block";
      } else if (channel.type === "hls") {
        if (!player) player = new shaka.Player(videoElement);
        await player.load(channel.manifestUri);
        videoElement.style.display = "block";
      } else if (channel.type === "youtube") {
        youtubeElement.src = channel.embedUrl;
        youtubeElement.style.display = "block";
        youtubeEmbed.src = `${channel.embedUrl}&autoplay=1`;
      }
    }

    function stopCurrentStream() {
      const videoElement = document.getElementById("video");
      const youtubeElement = document.getElementById("youtube-video");

      if (player) player.unload();
      videoElement.style.display = "none";
      youtubeElement.style.display = "none";
      youtubeElement.src = "";
    }

    function scrollSlider(categoryId, direction) {
      const slider = document.querySelector(`#${categoryId} .channel-slider`);
      const scrollAmount = direction === "left" ? -300 : 300;
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

    document.addEventListener("DOMContentLoaded", initializeUI);
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #10013d; /* Dark background */
  padding: 5px;
  border-top: 2px solid #333; /* Darker border for contrast */
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
}

.nav-item {
  color: #07ded7; /* Light gray text for better contrast */
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  flex-grow: 1;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out; /* Added text-shadow transition */
  position: relative;
}

.nav-item i {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Smooth bounce effect */
}

.nav-item:hover {
  color: #a80306; /* Change color to normal white on hover */
  transform: scale(1.1);
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 255, 255, 0.6); /* Normal white glow effect */
}

.nav-item:hover i {
  transform: scale(1.4); /* Enlarge the icon */
}
