import { clubSearchOverride } from "./clubsearch-override";
import { transferHubOverride } from "./transferhub-override";
import { transferSearchOverride } from "./transfersearch-override";
import { unassignedOverride } from "./unassigned-override";
import { playerViewPanelOverride } from "./playerviewpanel-override";
import { overrideStyle } from "./cssoverrides";
import { sbcViewOverride } from "./sbcview-override";
import { xmlRequestOverride } from "./common-override/xmlRequest-override";
import { futHomeOverride } from "./futhome-override";
import { popupOverride } from "./popup-override";
import { binPopUpOverride } from "./binpopup-override";
import { packItemOverride } from "./packitem-override";
import { sideBarNavOverride } from "./sidebarnav-override";
import { storeOverride } from "./store-override";
import { playerSlotOverride } from "./playerslot-override";
import { searchFilterViewOverride } from "./searchfilterview-override";
import { paginatedResultOverride } from "./paginatedresult-override";
import { itemPileOverride } from "./itempile-override";
import { quickListOpenOverride } from "./quicklistopen-override";
import { currencyTapOverride } from "./currencytap-override";
import { packAnimationOverride } from "./packanimation-override";
import { filterViewOverride } from "./filterview-override";

export const initOverrides = () => {
  xmlRequestOverride();
  unassignedOverride();
  clubSearchOverride();
  transferHubOverride();
  transferSearchOverride();
  playerViewPanelOverride();
  sbcViewOverride();
  futHomeOverride();
  packItemOverride();
  popupOverride();
  binPopUpOverride();
  sideBarNavOverride();
  storeOverride();
  playerSlotOverride();
  searchFilterViewOverride();
  paginatedResultOverride();
  itemPileOverride();
  quickListOpenOverride();
  currencyTapOverride();
  packAnimationOverride();
  filterViewOverride();

  overrideStyle();
};
