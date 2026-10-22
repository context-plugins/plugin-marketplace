import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines if the `address` fields required for the buyer. */
export type RequiredAddressFields2 = {
  /** Defines if the `organization` field for a buyer's address is required. @default false */
  organization?: boolean;
  /**
   * Defines if the `house_number_or_name` field for a buyer's address is required.
   *
   * @default false
   */
  houseNumberOrName?: boolean;
  /** Defines if the `line1` field for a buyer's address is required. @default false */
  line1?: boolean;
  /** Defines if the `line2` field for a buyer's address is required. @default false */
  line2?: boolean;
  /** Defines if the `city` field for a buyer's address is required. @default false */
  city?: boolean;
  /** Defines if the `postal_code` field for a buyer's address is required. @default false */
  postalCode?: boolean;
  /** Defines if the `state` field for a buyer's address is required. @default false */
  state?: boolean;
  /** Defines if the `state_code` field for a buyer's address is required. @default false */
  stateCode?: boolean;
  /** Defines if the `country` field for a buyer's address is required. @default false */
  country?: boolean;
};

export const requiredAddressFields2Schema: Schema<RequiredAddressFields2> = s.object<RequiredAddressFields2>({
  organization: s.defaulted(s.boolean(), false),
  houseNumberOrName: s.defaulted(s.boolean(), false),
  line1: s.defaulted(s.boolean(), false),
  line2: s.defaulted(s.boolean(), false),
  city: s.defaulted(s.boolean(), false),
  postalCode: s.defaulted(s.boolean(), false),
  state: s.defaulted(s.boolean(), false),
  stateCode: s.defaulted(s.boolean(), false),
  country: s.defaulted(s.boolean(), false),
  _keysMap: {
    houseNumberOrName: "house_number_or_name",
    postalCode: "postal_code",
    stateCode: "state_code",
  },
});
