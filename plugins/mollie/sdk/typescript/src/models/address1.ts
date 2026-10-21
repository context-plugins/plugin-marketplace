import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The address of the organization. */
export type Address1 = {
  /** A street and street number. */
  streetAndNumber: string;
  /** A postal code. This field may be required if the provided country has a postal code system. */
  postalCode: string;
  city: string;
  /**
   * A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * format.
   */
  country: string;
};

export const address1Schema: Schema<Address1> = s.object<Address1>({
  streetAndNumber: s.string(),
  postalCode: s.string(),
  city: s.string(),
  country: s.string(),
});
