import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1OpenApiDefinitionMarketHolidaysAndTimingsApiSchema,
  type Status1OpenApiDefinitionMarketHolidaysAndTimingsApi,
} from "./status1-open-api-definition-market-holidays-and-timings-api.js";

export type CasEligibleStatusData = {
  /** The CAS (Collateral Auction Session / Closing Auction Session) status of the segment. */
  status?: Status1OpenApiDefinitionMarketHolidaysAndTimingsApi;
  /** The timestamp (in milliseconds) when the CAS status was last updated. */
  lastUpdated?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const casEligibleStatusDataSchema: Schema<CasEligibleStatusData> = s.object<CasEligibleStatusData>(
  {
    status: s.optional(s.lazy(() => status1OpenApiDefinitionMarketHolidaysAndTimingsApiSchema)),
    lastUpdated: s.optional(s.int()),
    _keysMap: {
      lastUpdated: "last_updated",
    },
  },
  { additionalProperties: s.json() },
);
