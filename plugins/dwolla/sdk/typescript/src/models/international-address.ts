import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InternationalAddress = {
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  postalCode?: string;
  country: string;
  stateProvinceRegion: string;
};

export const internationalAddressSchema: Schema<InternationalAddress> = s.object<InternationalAddress>({
  address1: s.string(),
  address2: s.optional(s.string()),
  address3: s.optional(s.string()),
  city: s.string(),
  postalCode: s.optional(s.string()),
  country: s.string(),
  stateProvinceRegion: s.string(),
});
