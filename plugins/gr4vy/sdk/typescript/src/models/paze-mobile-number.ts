import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PazeMobileNumber = {
  /** ITU country dialing code. */
  countryCode: string;
  /** Phone number without country code. */
  phoneNumber: string;
};

export const pazeMobileNumberSchema: Schema<PazeMobileNumber> = s.object<PazeMobileNumber>({
  countryCode: s.string(),
  phoneNumber: s.string(),
});
