import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { residentialSchema, type Residential } from "./residential.js";

export type AddressesRazorpayPartnerStakeholdersApi = {
  residential?: Residential;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressesRazorpayPartnerStakeholdersApiSchema: Schema<AddressesRazorpayPartnerStakeholdersApi> =
  s.object<AddressesRazorpayPartnerStakeholdersApi>(
    {
      residential: s.optional(s.lazy(() => residentialSchema)),
    },
    { additionalProperties: s.json() },
  );
