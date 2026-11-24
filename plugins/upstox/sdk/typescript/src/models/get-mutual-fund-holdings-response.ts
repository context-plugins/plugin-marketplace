import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mutualFundHoldingDataSchema, type MutualFundHoldingData } from "./mutual-fund-holding-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetMutualFundHoldingsResponse = {
  status?: Status;
  /** Mutual fund holdings. */
  data?: MutualFundHoldingData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMutualFundHoldingsResponseSchema: Schema<GetMutualFundHoldingsResponse> =
  s.object<GetMutualFundHoldingsResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => mutualFundHoldingDataSchema))),
    },
    { additionalProperties: s.json() },
  );
