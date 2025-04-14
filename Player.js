  const streams = [
      {
        name: 'TV5',
        logo: 'https://i.imgur.com/Ddyfzrn.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        clearKey: { '2615129ef2c846a9bbd43a641c7303ef': '07c7f996b1734ea288641a68e1cfdc4d' },
        category: "Local"
      },
      {
        name: 'A2Z',
        logo: 'https://i.imgur.com/43nZ2rv.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        clearKey: { 'f703e4c8ec9041eeb5028ab4248fa094': 'c22f2162e176eee6273a5d0b68d19530' },
        category: "Local"
      },
      {
        name: 'GMA Pinoy TV',
        logo: 'https://i.imgur.com/Eo0f51v.png',
        type: 'mpegdash',
        manifestUri: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
        clearKey: { 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1': '47635b8e885e19f2ccbdff078c207058' },
        category: "Local"
      },
      {
        name: 'TFC',
        logo: 'https://i.imgur.com/zZWj5vn.png',
        type: 'mpegdash',
        manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/7045bc3c-9492-42d4-974e-a3b217776e57/index.mpd',
        clearKey: { '9568cc84e1d944f38eac304517eab6fd': 'f12142af8f39b3bab79d3679d3665ebe' },
        category: "Local"
      },
            {
        name: 'PBO',
        logo: 'https://i.imgur.com/buOVATz.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        clearKey: { 'dcbdaaa6662d4188bdf97f9f0ca5e830': '31e752b441bd2972f2b98a4b1bc1c7a1' },
        category: "Movies"
      },
      {
        name: 'Sari-Sari',
        logo: 'https://i.imgur.com/MXxN1UO.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        clearKey: { '0a7ab3612f434335aa6e895016d8cd2d': 'b21654621230ae21714a5cab52daeb9d' },
        category: "Local"
      },
      {
        name: 'Viva Cinema',
        logo: 'https://i.imgur.com/51RWtvd.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        clearKey: { '07aa813bf2c147748046edd930f7736e': '3bd6688b8b44e96201e753224adfc8fb' },
        category: "Movies"
      },
             {
        name: 'Cinemo',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSAX3s9pZ_vF-BYCNl2YauNfH__T2bzKq1Q&s',
        type: 'mpegdash',
        manifestUri: 'https://d1bail49udbz1k.cloudfront.net/out/v1/3a895f368f4a467c9bca0962559efc19/index.mpd',
        clearKey: { 'aa8aebe35ccc4541b7ce6292efcb1bfb': 'aab1df109d22fc5d7e3ec121ddf24e5f' },
        category: "Movies"
      },
                   {
        name: 'Cinema One',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Uon_6NqhJkBIgWbOh3I_xdccJuXCRcK3gw&s',
        type: 'mpegdash',
        manifestUri: 'https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd',
        clearKey: { '58d0e56991194043b8fb82feb4db7276': 'd68f41b59649676788889e19fb10d22c' },
        category: "Movies"
      },
                     {
        name: 'Jungo Pinoy TV',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_UgFhePKGiIVSCN_LYWF5YdublD4GN-OYVNJApS8lxw1afFgyz6Jmq4&s=10',
        type: 'hls',
        manifestUri: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
        category: "Movies"
      },
      {
        name: 'ANC',
        logo: 'https://i.imgur.com/Bcu69bU.png',
        type: 'mpegdash',
        manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        clearKey: { '4bbdc78024a54662854b412d01fafa16': '6039ec9b213aca913821677a28bd78ae' },
        category: "News"
      },
      {
        name: 'TVN Movies Pinoy',
        logo: 'https://imgur.com/12f0Qk8.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        clearKey: { '2e53f8d8a5e94bca8f9a1e16ce67df33': '3471b2464b5c7b033a03bb8307d9fa35' },
        category: "Movies"
      },
  {
        name: 'TMC',
        logo: 'https://i.imgur.com/6mNCite.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        clearKey: { '96701d297d1241e492d41c397631d857': 'ca2931211c1a261f082a3a2c4fd9f91b' },
        category: "Movies"
      },
{
        name: 'Cartoon Network',
        logo: 'https://i.imgur.com/R1fV2uY.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        clearKey: { 'a2d1f552ff9541558b3296b5a932136b': 'cdd48fa884dc0c3a3f85aeebca13d444' },
        category: "Kids"
      },
                   {
        name: 'DreamWorks Tagalized',
        logo: 'https://i.imgur.com/fh1Lg7b.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        clearKey: { '564b3b1c781043c19242c66e348699c5': 'd3ad27d7fe1f14fb1a2cd5688549fbab' },
        category: "Kids"
      },
{
        name: 'DreamWorks',
        logo: 'https://i.imgur.com/fh1Lg7b.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        clearKey: { '4ab9645a2a0a47edbd65e8479c2b9669': '8cb209f1828431ce9b50b593d1f44079' },
        category: "Kids"
      },
                         {
        name: 'PBS Kids',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/PBS_Kids_logo_%282022%29.svg/1200px-PBS_Kids_logo_%282022%29.svg.png',
        type: 'hls',
        manifestUri: 'https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b2000000.m3u8',
        category: "Kids"
      },
{
        name: 'Moonbug Kids',
        logo: 'https://i.imgur.com/H5Ha3ll.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd',
        clearKey: { '0bf00921bec94a65a124fba1ef52b1cd': '0f1488487cbe05e2badc3db53ae0f29f' },
        category: "Kids"
      },
  {
        name: 'Nickelodeon',
        logo: 'https://i.imgur.com/tIRSRoR.png',
        type: 'mpegdash',
        manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_primary.mpd',
        clearKey: { 'd8520e96a1283ab6e5be538474bfa810': 'bda5f7bbc1e44096f779a0619fe9881f' },
        category: "Kids"
      },
{
        name: 'Nick Jr',
        logo: 'https://i.imgur.com/nliH2PY.png',
        type: 'mpegdash',
        manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9982/default_primary.mpd',
        clearKey: { 'fa65220c9f76e424173899df533a6d10': 'b4abbee95b69b3e80a0d141272c870db' },
        category: "Kids"
      },
{
        name: 'HBO',
        logo: 'https://i.imgur.com/fHBIgs6.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        clearKey: { 'd47ebabf7a21430b83a8c4b82d9ef6b1': '54c213b2b5f885f1e0290ee4131d425b' },
        category: "Movies"
      },
{
        name: 'HBO Family',
        logo: 'https://i.imgur.com/WANpEkc.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        clearKey: { '872910c843294319800d85f9a0940607': 'f79fd895b79c590708cf5e8b5c6263be' },
        category: "Movies"
      },
      {
        name: 'HBO Signature',
        logo: 'https://i.imgur.com/Q2ki7HC.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        clearKey: { 'a06ca6c275744151895762e0346380f5': '559da1b63eec77b5a942018f14d3f56f' },
        category: "Movies"
      },
      {
        name: 'HBO Hits',
        logo: 'https://i.imgur.com/iCnfJS0.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        clearKey: { 'b04ae8017b5b4601a5a0c9060f6d5b7d': 'a8795f3bdb8a4778b7e888ee484cc7a1' },
        category: "Movies"
      },
{
        name: 'Cinemax',
        logo: 'https://i.imgur.com/r8qzNiy.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        clearKey: { 'b207c44332844523a3a3b0469e5652d7': 'fe71aea346db08f8c6fbf0592209f955' },
        category: "Movies"
      },
{
        name: 'Hits Now',
        logo: 'https://i.imgur.com/S3pNx8G.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        clearKey: { '14439a1b7afc4527bb0ebc51cf11cbc1': '92b0287c7042f271b266cc11ab7541f1' },
        category: "Educational and Documentary"
      },
        {
        name: 'Hits',
        logo: 'https://i.imgur.com/jghDgUJ.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
        clearKey: { 'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5' },
        category: "Movies"
      },
{
        name: 'Hits Movies',
        logo: 'https://i.imgur.com/zzdj40q.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd',
        clearKey: { 'f56b57b32d7e4b2cb21748c0b56761a7': '3df06a89aa01b32655a77d93e09e266f' },
        category: "Movies"
      },
{
        name: 'AXN',
        logo: 'https://i.imgur.com/Dj6tVaG.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        clearKey: { 'fd5d928f5d974ca4983f6e9295dfe410': '3aaa001ddc142fedbb9d5557be43792f' },
        category: "News"
      },
      {
        name: 'Warner TV',
        logo: 'https://i.imgur.com/vGEL2Ne.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
        clearKey: { '4503cf86bca3494ab95a77ed913619a0': 'afc9c8f627fb3fb255dee8e3b0fe1d71' },
        category: "Movies"
      },
{
        name: 'Rock Action',
        logo: 'https://i.imgur.com/PJZmoyW.png',
        type: 'mpegdash',
        manifestUri: 'https://tglmp04.akamaized.net/out/v1/421a3cd3bdcd492f8f4b5efb2363ed2c/manifest.mpd',
        clearKey: { '2341c2ecd3cf4865881bb0fa1287de8f': 'ad45202e64f66ef36b3f60fac93cc47f' },
        category: "Movies"
      },
{
        name: 'Rock Entertainment',
        logo: 'https://i.imgur.com/DP36vpY.png',
        type: 'mpegdash',
        manifestUri: 'https://tglmp02.akamaized.net/out/v1/621a7089e63144e4be7891cd9bfb10e2/manifest.mpd',
        clearKey: { '9229814c629b406f8de98d2f23c968a0': '40b9f250455b43b3b2ea6845ab81abca' },
        category: "Movies"
      },
{
        name: 'Thrill',
        logo: 'https://i.imgur.com/Szf7VBM.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        clearKey: { '928114ffb2394d14b5585258f70ed183': 'a82edc340bc73447bac16cdfed0a4c62' },
        category: "Movies"
      },
      {
        name: 'Lotus Macau',
        logo: 'https://i.imgur.com/sKfzEuf.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
        clearKey: { '60dc692e64ea443a8fb5ac186c865a9b': '01bdbe22d59b2a4504b53adc2f606cc1' },
        category: "Movies"
      },
{
        name: 'IBC13',
        logo: 'https://i.imgur.com/Org4yTu.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        clearKey: { '04e292bc99bd4ccba89e778651914254': 'ff0a62bdf8920ce453fe680330b563a5' },
        category: "News"
      },
{
        name: 'PTV4',
        logo: 'https://i.imgur.com/Ktl7qZt.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        clearKey: { '71a130a851b9484bb47141c8966fb4a3': 'ad1f003b4f0b31b75ea4593844435600' },
        category: "News"
      },
      {
        name: 'DepEd Channel',
        logo: 'https://i.imgur.com/TyFFBWn.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        clearKey: { '0f853706412b11edb8780242ac120002': '2157d6529d80a760f60a8b5350dbc4df' },
        category: "Educational and Documentary"
      },
{
        name: 'Buko Channel',
        logo: 'https://i.imgur.com/Wv0K5Yc.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        clearKey: { 'd273c085f2ab4a248e7bfc375229007d': '7932354c3a84f7fc1b80efa6bcea0615' },
        category: "Local"
      },
{
        name: 'Knowledge Channel',
        logo: 'https://i.imgur.com/UIqEr2y.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        clearKey: { '0f856fa0412b11edb8780242ac120002': '783374273ef97ad3bc992c1d63e091e7' },
        category: "Kids"
      },
{
        name: 'Bilyonaryo Channel',
        logo: 'https://i.imgur.com/Z5ZyJ8c.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        clearKey: { '227ffaf09bec4a889e0e0988704d52a2': 'b2d0dce5c486891997c1c92ddaca2cd2' },
        category: "News"
      },
{
        name: 'TVUP',
        logo: 'https://i.imgur.com/P0UNHfH.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
        clearKey: { '83e813ccd4ca4837afd611037af02f63': 'a97c515dbcb5dcbc432bbd09d15afd41' },
        category: "Sports"
      },
      {
        name: 'TV Maria',
        logo: 'https://i.imgur.com/G3kbHMQ.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
        clearKey: { 'fa3998b9a4de40659725ebc5151250d6': '998f1294b122bbf1a96c1ddc0cbb229f' },
        category: "News"
      },
{
        name: 'True FM TV',
        logo: 'https://i.imgur.com/zPOYiLs.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        clearKey: { '0559c95496d44fadb94105b9176c3579': '40d8bb2a46ffd03540e0c6210ece57ce' },
        category: "News"
      },
{
        name: 'Teleradyo',
        logo: 'https://i.imgur.com/G36wUtQ.png',
        type: 'mpegdash',
        manifestUri: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        clearKey: { '47c093e0c9fd4f80839a0337da3dd876': '50547394045b3d047dc7d92f57b5fb33' },
        category: "News"
      },
                         {
        name: 'TVN',
        logo: 'https://i.imgur.com/gmM3ncL.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        clearKey: { 'e1bde543e8a140b38d3f84ace746553e': 'b712c4ec307300043333a6899a402c10' },
        category: "Movies"
      },
      {
        name: 'RPTV',
        logo: 'https://i.imgur.com/GjQEEvq.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        clearKey: { '1917f4caf2364e6d9b1507326a85ead6': 'a1340a251a5aa63a9b0ea5d9d7f67595' },
        category: "Local"
      },
{
        name: 'MPTV',
        logo: 'https://i.imgur.com/BMCnoRn.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        clearKey: { '6aab8f40536f4ea98e7c97b8f3aa7d4e': '139aa5a55ade471faaddacc4f4de8807' },
        category: "Sports"
      },
{
        name: 'UAAP Varsity',
        logo: 'https://i.imgur.com/rifinVV.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        clearKey: { '95588338ee37423e99358a6d431324b9': '6e0f50a12f36599a55073868f814e81e' },
        category: "Sports"
      },
{
        name: 'PBA Rush',
        logo: 'https://i.imgur.com/J4QCDLG.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        clearKey: { '76dc29dd87a244aeab9e8b7c5da1e5f3': '95b2f2ffd4e14073620506213b62ac82' },
        category: "Sports"
      },
      {
        name: 'NBA TV Philippines',
        logo: 'https://i.imgur.com/sG7zuX0.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
        clearKey: { 'f36eed9e95f140fabbc88a08abbeafff': '0125600d0eb13359c28bdab4a2ebe75a' },
        category: "Sports"
      },
      {
        name: 'One Sports Plus',
        logo: 'https://i.imgur.com/rKCkaHh.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        clearKey: { '322d06e9326f4753a7ec0908030c13d8': '1e3e0ca32d421fbfec86feced0efefda' },
        category: "Sports"
      },
      {
        name: 'One PH',
        logo: 'https://i.imgur.com/syEhuvH.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        clearKey: { '92834ab4a7e1499b90886c5d49220e46': 'a7108d9a6cfcc1b7939eb111daf09ab3' },
        category: "News"
      },
{
        name: 'One Sports',
        logo: 'https://i.imgur.com/iyBXXpU.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        clearKey: { '53c3bf2eba574f639aa21f2d4409ff11': '3de28411cf08a64ea935b9578f6d0edd' },
        category: "Sports"
      },
{
        name: 'One News',
        logo: 'https://i.imgur.com/bpRiu54.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        clearKey: { 'd39eb201ae494a0b98583df4d110e8dd': '6797066880d344422abd3f5eda41f45f' },
        category: "News"
      },
{
        name: 'TAP TV',
        logo: 'https://i.imgur.com/KJaSftF.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        clearKey: { 'f6804251e90b4966889b7df94fdc621e': '55c3c014f2bd12d6bd62349658f24566' },
        category: "Movies"
      },
{
        name: 'Tap Edge',
        logo: 'https://i.imgur.com/EKt9NGv.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        clearKey: { '0f854034412b11edb8780242ac120002': 'af8ad1c5e3f2e1b751a4f64608f24275' },
        category: "Movies"
      },
{
        name: 'Tap Sports',
        logo: 'https://i.imgur.com/EEDMg6S.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        clearKey: { 'eabd2d95c89e42f2b0b0b40ce4179ea0': '0e7e35a07e2c12822316c0dc4873903f' },
        category: "Sports"
      },
{
        name: 'Tap Movies',
        logo: 'https://i.imgur.com/5mRcvMS.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        clearKey: { '286e1c2d622c4c73b5c3d72e4a848abd': 'b7fad67599c1ce3c2fbc9d02b901be05' },
        category: "Movies"
      },
{
        name: 'Tap Action Flix',
        logo: 'https://i.imgur.com/70wmIdp.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        clearKey: { 'bee1066160c0424696d9bf99ca0645e3': 'f5b72bf3b89b9848de5616f37de040b7' },
        category: "Movies"
      },
{
        name: 'CCTV4',
        logo: 'https://i.imgur.com/siVwIW8.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        clearKey: { 'b83566836c0d4216b7107bd7b8399366': '32d50635bfd05fbf8189a0e3f6c8db09' },
        category: "News"
      },
{
        name: 'Arirang Korea',
        logo: 'https://i.imgur.com/say6vAQ.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        clearKey: { '13815d0fa026441ea7662b0c9de00bcf': '2d99a55743677c3879a068dd9c92f824' },
        category: "News"
      },
{
        name: 'BBC Earth',
        logo: 'https://i.imgur.com/TE9MEV1.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        clearKey: { '34ce95b60c424e169619816c5181aded': '0e2a2117d705613542618f58bf26fc8e' },
        category: "News"
      },
{
        name: 'Discovery Channel',
        logo: 'https://i.imgur.com/xk1u2TS.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        clearKey: { 'd9ac48f5131641a789328257e778ad3a': 'b6e67c37239901980c6e37e0607ceee6' },
        category: "Educational and Documentary"
      },
{
        name: 'KBS World',
        logo: 'https://i.imgur.com/H2IWDLJ.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        clearKey: { '22ff2347107e4871aa423bea9c2bd363': 'c6e7ba2f48b3a3b8269e8bc360e60404' },
        category: "Educational and Documentary"
      },
{
        name: 'Kix',
        logo: 'https://i.imgur.com/B8Fmzer.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        clearKey: { 'a8d5712967cd495ca80fdc425bc61d6b': 'f248c29525ed4c40cc39baeee9634735' },
        category: "Movies"
      },
{
        name: 'Lifetime',
        logo: 'https://i.imgur.com/iHplX00.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        clearKey: { 'cf861d26e7834166807c324d57df5119': '64a81e30f6e5b7547e3516bbf8c647d0' },
        category: "Lifestyle"
      },
{
        name: 'HGTV',
        logo: 'https://i.imgur.com/E7uzV5q.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        clearKey: { 'f0e3ab943318471abc8b47027f384f5a': '13802a79b19cc3485d2257165a7ef62a' },
        category: "Educational and Documentary"
      },
{
        name: 'Asian Food Network',
        logo: 'https://i.imgur.com/O5jBcL2.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        clearKey: { '1619db30b9ed42019abb760a0a3b5e7f': '5921e47fb290ae263291b851c0b4b6e4' },
        category: "Educational and Documentary"
      },
{
        name: 'Travel Channel',
        logo: 'https://i.imgur.com/sojhfxX.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        clearKey: { 'f3047fc13d454dacb6db4207ee79d3d3': 'bdbd38748f51fc26932e96c9a2020839' },
        category: "Educational and Documentary"
      },
{
        name: 'Tech Storm',
        logo: 'https://i.imgur.com/yt8UxLj.png',
        type: 'mpegdash',
        manifestUri: 'https://cdn08jtedge.indihometv.com/dassdvr/133/techstorm/manifest.mpd',
        clearKey: { '69646b755f3130303030303030303030': 'e4a2359b05563399f1d9adfce641724a' },
        category: "Educational and Documentary"
      },
{
        name: 'Crime+Investigation',
        logo: 'https://i.imgur.com/GowLsrU.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        clearKey: { '21e2843b561c4248b8ea487986a16d33': 'db6bb638ccdfc1ad1a3e98d728486801' },
        category: "Educational and Documentary"
      },
{
        name: 'Al Jazeera',
        logo: 'https://i.imgur.com/3n9d0wO.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
        clearKey: { '0f85362a412b11edb8780242ac120002': 'd643dfbbfca6dc64e7f58fd67ea4b7d5' },
        category: "News"
      },
{
        name: 'BBC World News',
        logo: 'https://i.imgur.com/onQ2oxw.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        clearKey: { 'f59650be475e4c34a844d4e2062f71f3': '119639e849ddee96c4cec2f2b6b09b40' },
        category: "News"
      },
{
        name: 'CNA',
        logo: 'https://i.imgur.com/NWP3n1k.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        clearKey: { 'b259df9987364dd3b778aa5d42cb9acd': '753e3dba96ab467e468269e7e33fb813' },
        category: "News"
      },
{
        name: 'ABC Australia',
        logo: 'https://i.imgur.com/qQ33TVM.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        clearKey: { '389497f9f8584a57b234e27e430e04b7': '3b85594c7f88604adf004e45c03511c0' },
        category: "News"
      },
{
        name: 'SPOTV',
        logo: 'https://i.imgur.com/rAY5j3t.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        clearKey: { 'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e' },
        category: "Sports"
      },
{
        name: 'SPOTV2',
        logo: 'https://i.imgur.com/GTwZ19i.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        clearKey: { '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed' },
        category: "Sports"
      },
{
        name: 'Premier Sports',
        logo: 'https://i.imgur.com/dBmvkdJ.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        clearKey: { 'fc19c98cb9504a0fb78b22fea0a4b814': 'ea683112a96d4ae6c32d4ea13923e8c7' },
        category: "Sports"
      },
{
        name: 'Premier Sports 2',
        logo: 'https://i.imgur.com/xX9NPje.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        clearKey: { '59454adb530b4e0784eae62735f9d850': '61100d0b8c4dd13e4eb8b4851ba192cc' },
        category: "Sports"
      },
{
        name: 'WWE Network',
        logo: 'https://imgur.com/YLM91P6.png',
        type: 'mpegdash',
        manifestUri: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2603/default_primary.mpd',
        clearKey: { '0cbc4d3b4fbd9af512acb2488bb42910': '30528c4ef882954e5707cd1001d66121' },
        category: "Sports"
      },
{
        name: 'History',
        logo: 'https://i.imgur.com/BkoC446.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        clearKey: { 'a7724b7ca2604c33bb2e963a0319968a': '6f97e3e2eb2bade626e0281ec01d3675' },
        category: "Educational and Documentary"
      },
{
        name: 'Animal Planet',
        logo: 'https://i.imgur.com/1NcoovM.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        clearKey: { '436b69f987924fcbbc06d40a69c2799a': 'c63d5b0d7e52335b61aeba4f6537d54d' },
        category: "Educational and Documentary"
      },
{
        name: 'Fashion TV',
        logo: 'https://i.imgur.com/wzjqyZE.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        clearKey: { '971ebbe2d887476398e97c37e0c5c591': '472aa631b1e671070a4bf198f43da0c7' },
        category: "Lifestyle"
      },
{
        name: 'Food Network',
        logo: 'https://i.imgur.com/EXC1yRz.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        clearKey: { 'b7299ea0af8945479cd2f287ee7d530e': 'b8ae7679cf18e7261303313b18ba7a14' },
        category: "Lifestyle"
      },
{
        name: 'Bloomberg',
        logo: 'https://i.imgur.com/pl4w2NN.png',
        type: 'mpegdash',
        manifestUri: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        clearKey: { 'ef7d9dcfb99b406cb79fb9f675cba426': 'b24094f6ca136af25600e44df5987af4' },
        category: "News"
      },
{
name: 'COLORS TV',
        manifestUri: 'https://tv.jomarhost.xyz/80bf754f-d8ff-4936-8409-451a921f95be.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/C7a9W27.png',
	        category: "Local"
         },	 
         {
name: 'GMA',
        manifestUri: 'https://gma.fflame143.workers.dev/master.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/yh8g68M.png',
	    category: "Local"
         },	 
         {
name: 'GTV',
        manifestUri: 'https://gtv.fflame143.workers.dev/master.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/PsyP7Ga.jpeg',
		 category: "Local"
         },	 
         {
name: 'NET 25',
        manifestUri: 'https://net25.fflame143.workers.dev/master.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/2pRBUrH.png',
		category: "Local"
         },	 
         {
name: 'ALLTV 2',
        manifestUri: 'https://alltv.fflame143.workers.dev/master.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/YRA5Vz4.jpeg',
		category: "Local"
	      },
  {
        name: 'HallyPop',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/GMA_Hallypop_logo.png',
        type: 'hls',
        manifestUri: 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8',
        category: "Local"
      },

    
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
renderChannels(channelsData);
  })
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

 </script>
