import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  address1BillV3VendorsApiSchema,
  type Address1BillV3VendorsApi,
} from "./address1-bill-v3-vendors-api.js";

export type BankInfo1 = {
  /** SWIFT code */
  swiftBic?: string;
  /** Branch name */
  branchName?: string;
  /** Country ISO code */
  countryIso?: string;
  /** National bank code */
  nationalBankCode?: string;
  /** Bank institution name */
  institutionName?: string;
  /** Primary key */
  primaryKey?: string;
  address?: Address1BillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankInfo1Schema: Schema<BankInfo1> = s.object<BankInfo1>(
  {
    swiftBic: s.optional(s.string()),
    branchName: s.optional(s.string()),
    countryIso: s.optional(s.string()),
    nationalBankCode: s.optional(s.string()),
    institutionName: s.optional(s.string()),
    primaryKey: s.optional(s.string()),
    address: s.optional(s.lazy(() => address1BillV3VendorsApiSchema)),
    _keysMap: {
      swiftBic: "swiftBIC",
      countryIso: "countryISO",
    },
  },
  { additionalProperties: s.json() },
);
