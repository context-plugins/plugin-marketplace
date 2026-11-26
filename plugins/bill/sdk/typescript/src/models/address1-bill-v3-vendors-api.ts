import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Address1BillV3VendorsApi = {
  /** Address line 1 */
  line1?: string;
  /** Address line 2 */
  line2?: string;
  /** City */
  city?: string;
  /** State or province */
  stateOrProvince?: string;
  /** Zip or postal code */
  zipOrPostalCode?: string;
  /** Country */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const address1BillV3VendorsApiSchema: Schema<Address1BillV3VendorsApi> =
  s.object<Address1BillV3VendorsApi>(
    {
      line1: s.optional(s.string()),
      line2: s.optional(s.string()),
      city: s.optional(s.string()),
      stateOrProvince: s.optional(s.string()),
      zipOrPostalCode: s.optional(s.string()),
      country: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
