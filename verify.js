export default {
  start() {
    const style = document.createElement('style');
    style.textContent = `
      /* في الرسايل والـ Profile */
      [class*="header"] [class*="username"],
      [class*="title"] [class*="username"],
      [class*="name__"] {
        position: relative;
      }
      
      [class*="header"] [class*="username"]::after,
      [class*="title"] [class*="username"]::after,
      [class*="name__"]::after {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 6px;
        margin-right: 2px;
        background-image: url('https://cdn.phototourl.com/member/2026-11-02-ab484e83-b8ca-40b3-8504-26467294d15b.png');
        background-size: contain;
        background-repeat: no-repeat;
        vertical-align: text-bottom;
      }
      
      /* في قائمة الأعضاء */
      [class*="member"] [class*="name"],
      .listItem-GuPuDH {
        position: relative;
      }
      
      [class*="member"] [class*="name"]::after,
      .listItem-GuPuDH::after {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 6px;
        margin-right: 2px;
        background-image: url('https://cdn.phototourl.com/member/2026-11-02-ab484e83-b8ca-40b3-8504-26467294d15b.png');
        background-size: contain;
        background-repeat: no-repeat;
        vertical-align: text-bottom;
      }
    `;
    document.head.appendChild(style);
  },
  stop() {}
};
