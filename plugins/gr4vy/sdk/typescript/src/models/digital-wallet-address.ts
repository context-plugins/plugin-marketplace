import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { line2Schema, type Line2 } from "./unions/line2.js";

export type DigitalWalletAddress = {
  /** The first line of the address. */
  line1: string;
  /** The second line of the address. */
  line2?: Line2;
  /** The city for the address. */
  city: string;
  /** The code of state, county, or province for the address in ISO 3166-2 format. */
  stateCode: string;
  /** The zip or postal code for the address. */
  postalCode: string;
};

export const digitalWalletAddressSchema: Schema<DigitalWalletAddress> = s.object<DigitalWalletAddress>({
  line1: s.string(),
  line2: s.optional(s.lazy(() => line2Schema)),
  city: s.string(),
  stateCode: s.string(),
  postalCode: s.string(),
  _keysMap: {
    stateCode: "state_code",
    postalCode: "postal_code",
  },
});
