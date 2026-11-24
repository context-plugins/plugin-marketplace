import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { availableBillingModeSchema, type AvailableBillingMode } from "./available-billing-mode.js";

export type Location = {
  /** The code for the location. */
  locationCode?: string;
  /**
   * The name of the location. This includes the name of the colocation partner and the physical
   * site of the building.
   */
  locationName?: string;
  /** The Amazon Web Services Region for the location. */
  region?: string;
  /** The available port speeds for the location. */
  availablePortSpeeds?: string[];
  /** The name of the service provider for the location. */
  availableProviders?: string[];
  /** The available MAC Security (MACsec) port speeds for the location. */
  availableMacSecPortSpeeds?: string[];
  /**
   * The billing modes available at the location, including the port speeds and Amazon Web Services
   * Regions supported by each mode.
   */
  availableBillingModes?: AvailableBillingMode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    locationCode: s.optional(s.string()),
    locationName: s.optional(s.string()),
    region: s.optional(s.string()),
    availablePortSpeeds: s.optional(s.array(s.string())),
    availableProviders: s.optional(s.array(s.string())),
    availableMacSecPortSpeeds: s.optional(s.array(s.string())),
    availableBillingModes: s.optional(s.array(s.lazy(() => availableBillingModeSchema))),
  },
  { additionalProperties: s.json() },
);
