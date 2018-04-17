Object.defineProperty(exports,"__esModule",{value:true});var _nativeBaseShoutemTheme=require("native-base-shoutem-theme");

var _reactNativeEasyGrid=require("react-native-easy-grid");
var _Drawer=require("./basic/Drawer");var _Drawer2=_interopRequireDefault(_Drawer);
var _SwipeRow=require("./basic/SwipeRow");
var _Text=require("./basic/Text");
var _View=require("./basic/View");
var _Button=require("./basic/Button");
var _TabHeading=require("./basic/TabHeading");
var _TabContainer=require("./basic/TabContainer");
var _IconNB=require("./basic/IconNB");
var _Icon=require("./basic/Icon");
var _Header=require("./basic/Header");
var _InputGroup=require("./basic/InputGroup");
var _Input=require("./basic/Input");
var _Title=require("./basic/Title");
var _Fab=require("./basic/Fab");
var _Left=require("./basic/Left");
var _Right=require("./basic/Right");
var _Body=require("./basic/Body");
var _Badge=require("./basic/Badge");
var _Checkbox=require("./basic/Checkbox");
var _Radio=require("./basic/Radio");
var _Thumbnail=require("./basic/Thumbnail");
var _Card=require("./basic/Card");
var _CardItem=require("./basic/CardItem");
var _H=require("./basic/H1");
var _H2=require("./basic/H2");
var _H3=require("./basic/H3");
var _Spinner=require("./basic/Spinner");
var _Switch=require("./basic/Switch");
var _Container=require("./basic/Container");
var _Root=require("./basic/Root");
var _Content=require("./basic/Content");
var _Footer=require("./basic/Footer");
var _FooterTab=require("./basic/FooterTab");
var _Form=require("./basic/Form");
var _ToastContainer=require("./basic/ToastContainer");
var _Actionsheet=require("./basic/Actionsheet");
var _Picker=require("./basic/Picker");
var _List=require("./basic/List");
var _ListItem=require("./basic/ListItem");
var _Separator=require("./basic/Separator");
var _DeckSwiper=require("./basic/DeckSwiper");
var _Item=require("./basic/Item");
var _Segment=require("./basic/Segment");
var _Label=require("./basic/Label");
var _Textarea=require("./basic/Textarea");
var _Tab=require("./basic/Tab");
var _Tabs=require("./basic/Tabs");var _Tabs2=_interopRequireDefault(_Tabs);
var _DefaultTabBar=require("./basic/Tabs/DefaultTabBar");
var _ScrollableTabBar=require("./basic/Tabs/ScrollableTabBar");
var _Subtitle=require("./basic/Subtitle");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var VueNativeBasePlugin={


install:function install(Vue,options){
Vue.component("nb-drawer",_Drawer2.default);
Vue.component("nb-row",_reactNativeEasyGrid.Row);
Vue.component("nb-col",_reactNativeEasyGrid.Col);
Vue.component("nb-grid",_reactNativeEasyGrid.Grid);
Vue.component("nb-swipe-row",_SwipeRow.SwipeRow);
Vue.component("nb-text",_Text.Text);
Vue.component("nb-view",_View.ViewNB);
Vue.component("nb-button",_Button.Button);
Vue.component("nb-tab-heading",_TabHeading.TabHeading);
Vue.component("nb-tab-container",_TabContainer.TabContainer);
Vue.component("nb-icon-nb",_IconNB.IconNB);
Vue.component("nb-icon",_Icon.Icon);
Vue.component("nb-style-provider",_nativeBaseShoutemTheme.StyleProvider);
Vue.component("nb-header",_Header.Header);
Vue.component("nb-input-group",_InputGroup.InputGroup);
Vue.component("nb-input",_Input.Input);
Vue.component("nb-title",_Title.Title);
Vue.component("nb-fab",_Fab.Fab);
Vue.component("nb-left",_Left.Left);
Vue.component("nb-right",_Right.Right);
Vue.component("nb-body",_Body.Body);
Vue.component("nb-badge",_Badge.Badge);
Vue.component("nb-checkbox",_Checkbox.CheckBox);
Vue.component("nb-radio",_Radio.Radio);
Vue.component("nb-thumbnail",_Thumbnail.Thumbnail);
Vue.component("nb-card",_Card.Card);
Vue.component("nb-cardItem",_CardItem.CardItem);
Vue.component("nb-h1",_H.H1);
Vue.component("nb-h2",_H2.H2);
Vue.component("nb-h3",_H3.H3);
Vue.component("nb-spinner",_Spinner.Spinner);
Vue.component("nb-switch",_Switch.Switch);
Vue.component("nb-container",_Container.Container);
Vue.component("nb-root",_Root.Root);
Vue.component("nb-content",_Content.Content);
Vue.component("nb-tab-content",_Content.Content);
Vue.component("nb-footer",_Footer.Footer);
Vue.component("nb-footer-tab",_FooterTab.FooterTab);
Vue.component("nb-form",_Form.Form);
Vue.component("nb-toast",_ToastContainer.ToastContainer);
Vue.component("nb-action-sheet",_Actionsheet.ActionSheetContainer);
Vue.component("nb-picker",_Picker.PickerNB);
Vue.component("nb-list",_List.List);
Vue.component("nb-list-item",_ListItem.ListItem);
Vue.component("nb-separator",_Separator.Separator);
Vue.component("nb-deckSwiper",_DeckSwiper.DeckSwiper);
Vue.component("nb-item",_Item.Item);
Vue.component("nb-segment",_Segment.Segment);
Vue.component("nb-label",_Label.Label);
Vue.component("nb-textarea",_Textarea.Textarea);
Vue.component("nb-tab",_Tab.Tab);
Vue.component("nb-tabs",_Tabs2.default);
Vue.component("nb-default-tab-bar",_DefaultTabBar.DefaultTabBar);
Vue.component("nb-scrollable-tab",_ScrollableTabBar.ScrollableTab);
Vue.component("nb-subtitle",_Subtitle.Subtitle);
}};exports.default=


VueNativeBasePlugin;
//# sourceMappingURL=vue-native.js.map