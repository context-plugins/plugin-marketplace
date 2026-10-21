import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Address of the organization. */
export type Address2 = {
  /** The street name and house number of the organization. */
  streetAndNumber?: string | null;
  /**
   * The postal code of the organization. Required if a street address is provided and if the
   * country has a postal code system.
   */
  postalCode?: string | null;
  /** The city of the organization. Required if a street address is provided. */
  city?: string | null;
  /**
   * The country of the address in [ISO 3166-1
   * alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
   */
  country: string;
};

export const address2Schema: Schema<Address2> = s.object<Address2>({
  streetAndNumber: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  country: s.string(),
});
