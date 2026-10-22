import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address1 = {
  address1: string;
  address2?: string;
  city: string;
  stateProvinceRegion: string;
  postalCode: string;
  country: string;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
  address1: s.string(),
  address2: s.optional(s.string()),
  city: s.string(),
  stateProvinceRegion: s.string(),
  postalCode: s.string(),
  country: s.string(),
});
