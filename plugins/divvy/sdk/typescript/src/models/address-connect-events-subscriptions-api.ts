import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor address information. */
export type AddressConnectEventsSubscriptionsApi = {
  line1?: string;
  line2?: string;
  city?: string;
  stateOrProvince?: string;
  zipOrPostalCode?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressConnectEventsSubscriptionsApiSchema: Schema<AddressConnectEventsSubscriptionsApi> =
  s.object<AddressConnectEventsSubscriptionsApi>(
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
