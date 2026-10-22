import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  addressString?: string;
  extractedAddressString?: string;
  addressLine1?: string;
  addressLine2?: string;
  locality?: string;
  administrativeArea?: string;
  postalCode?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  addressString: s.optional(s.string()),
  extractedAddressString: s.optional(s.string()),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  locality: s.optional(s.string()),
  administrativeArea: s.optional(s.string()),
  postalCode: s.optional(s.string()),
});
