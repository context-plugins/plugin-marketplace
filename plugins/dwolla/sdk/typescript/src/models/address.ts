import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  stateProvinceRegion?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  address3: s.optional(s.string()),
  city: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  country: s.optional(s.string()),
  stateProvinceRegion: s.optional(s.string()),
});
