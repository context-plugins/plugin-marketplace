import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StorefrontAddress = {
  regionCode?: string;
  languageCode?: string;
  postalCode?: string;
  administrativeArea?: string;
  locality?: string;
  addressLines?: string[];
};

export const storefrontAddressSchema: Schema<StorefrontAddress> = s.object<StorefrontAddress>({
  regionCode: s.optional(s.string()),
  languageCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  administrativeArea: s.optional(s.string()),
  locality: s.optional(s.string()),
  addressLines: s.optional(s.array(s.string())),
});
