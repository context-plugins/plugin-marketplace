import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marketStatusData2Schema, type MarketStatusData2 } from "./market-status-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetMarketStatusResponse = {
  status?: Status;
  /** Response data for market live status */
  data?: MarketStatusData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMarketStatusResponseSchema: Schema<GetMarketStatusResponse> =
  s.object<GetMarketStatusResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => marketStatusData2Schema)),
    },
    { additionalProperties: s.json() },
  );
