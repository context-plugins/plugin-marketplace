import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1OpenApiDefinitionMarketHolidaysAndTimingsApiSchema,
  type Status1OpenApiDefinitionMarketHolidaysAndTimingsApi,
} from "./status1-open-api-definition-market-holidays-and-timings-api.js";

/**
 * CAS (Closing Auction Session) status of the segment. Present only for segments where CAS exists
 * (e.g. NSE_EQ); absent otherwise.
 */
export type CasEligibleStatusData2 = {
  /** The CAS (Collateral Auction Session / Closing Auction Session) status of the segment. */
  status?: Status1OpenApiDefinitionMarketHolidaysAndTimingsApi;
  /** The timestamp (in milliseconds) when the CAS status was last updated. */
  lastUpdated?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const casEligibleStatusData2Schema: Schema<CasEligibleStatusData2> = s.object<CasEligibleStatusData2>(
  {
    status: s.optional(s.lazy(() => status1OpenApiDefinitionMarketHolidaysAndTimingsApiSchema)),
    lastUpdated: s.optional(s.int()),
    _keysMap: {
      lastUpdated: "last_updated",
    },
  },
  { additionalProperties: s.json() },
);
