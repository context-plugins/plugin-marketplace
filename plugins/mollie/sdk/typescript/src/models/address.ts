import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Address = {
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

export const addressSchema: Schema<Address> = s.object<Address>({
  streetAndNumber: s.string(),
  postalCode: s.string(),
  city: s.string(),
  country: s.string(),
});
