import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IdNumber = {
  /** The type of phone number, such as landline, mobile, fax, unknown etc */
  type: string;
  /** ID number eg, National Insurance Number in UK, Social Securtiy Number in US */
  idNumber: string;
  /** Country the address is in. It must be a valid ISO2 or ISO3 country code */
  country?: string;
};

export const idNumberSchema: Schema<IdNumber> = s.object<IdNumber>({
  type: s.string(),
  idNumber: s.string(),
  country: s.optional(s.string()),
});
