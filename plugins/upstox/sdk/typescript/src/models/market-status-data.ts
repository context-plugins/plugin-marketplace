import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { casEligibleStatusData2Schema, type CasEligibleStatusData2 } from "./cas-eligible-status-data2.js";

export type MarketStatusData = {
  exchange?: string;
  status?: string;
  lastUpdated?: number;
  /**
   * CAS (Closing Auction Session) status of the segment. Present only for segments where CAS exists
   * (e.g. NSE_EQ); absent otherwise.
   */
  casEligibleStatus?: CasEligibleStatusData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const marketStatusDataSchema: Schema<MarketStatusData> = s.object<MarketStatusData>(
  {
    exchange: s.optional(s.string()),
    status: s.optional(s.string()),
    lastUpdated: s.optional(s.int()),
    casEligibleStatus: s.optional(s.lazy(() => casEligibleStatusData2Schema)),
    _keysMap: {
      lastUpdated: "last_updated",
      casEligibleStatus: "cas_eligible_status",
    },
  },
  { additionalProperties: s.json() },
);
