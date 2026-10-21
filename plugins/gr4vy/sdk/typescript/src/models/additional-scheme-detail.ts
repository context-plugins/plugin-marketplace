import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardScheme4Schema, type CardScheme4 } from "./card-scheme4.js";
import { iconUrlSchema, type IconUrl } from "./unions/icon-url.js";

export type AdditionalSchemeDetail = {
  /** The card scheme/network. */
  scheme: CardScheme4;
  /** URL to the card scheme's icon. Null when the scheme has no icon. */
  iconUrl: IconUrl;
};

export const additionalSchemeDetailSchema: Schema<AdditionalSchemeDetail> = s.object<AdditionalSchemeDetail>({
  scheme: cardScheme4Schema,
  iconUrl: iconUrlSchema,
  _keysMap: {
    iconUrl: "icon_url",
  },
});
