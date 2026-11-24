import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shareHoldingDataSchema, type ShareHoldingData } from "./share-holding-data.js";
import { statusSchema, type Status } from "./status.js";

export type ShareHoldingsResponse = {
  status?: Status;
  data?: ShareHoldingData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shareHoldingsResponseSchema: Schema<ShareHoldingsResponse> = s.object<ShareHoldingsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => shareHoldingDataSchema))),
  },
  { additionalProperties: s.json() },
);
