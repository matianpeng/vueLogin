import API from "@/configs/"
import MateAlert from "../../commons/mateAlert";

export default {
  name: "List",
  components: {MateAlert},
  data() {
    return {
      userMenuList: [],
      addPath: API.base + "/",
      username: "",
      toots: false,
      mateShow:false,
      alertContent:""
    }
  },
  methods: {
    getUserMenu() {
      let _this = this;
      api.getUserMenu().then(function (res) {
        if (res.data.code === 0) {
          _this.userMenuList = res.data.menuList
        } else {
          _this.mateShow = true;
          _this.alertContent = res.data.msg
        }
      }).catch(function () {
        window.location.href = API.base + "/displayLogin.html";
        }
      )
    }, closeDialog(){
      this.mateShow=false;
    },
    link(e) {
      switch (e) {
        case 0:
          window.location.href = API.base + "/index.html";
          break;
        case 1:
          window.location.href = API.base + "/displayLogin.html";
          break;
      }
    }
  },
  mounted() {
    this.username = window.sessionStorage.getItem('username');
    this.getUserMenu()
  }
}
