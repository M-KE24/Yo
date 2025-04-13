    ];

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
