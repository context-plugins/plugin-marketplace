import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { holdingsDataSchema, type HoldingsData } from "./holdings-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetHoldingsResponse = {
  status?: Status;
  /** Response data for holdings */
  data?: HoldingsData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getHoldingsResponseSchema: Schema<GetHoldingsResponse> = s.object<GetHoldingsResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => holdingsDataSchema))),
  },
  { additionalProperties: s.json() },
);
