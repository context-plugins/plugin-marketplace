import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
  /** Optional address document id */
  id?: string;
  /** Address line 1 */
  addressLine1?: string;
  /** City */
  city?: string;
  /** State/Province */
  state?: string;
  /** Postal/ZIP code */
  postCode?: string;
  /** Country */
  country?: string;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  id: s.optional(s.string()),
  addressLine1: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  postCode: s.optional(s.string()),
  country: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
