import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mutualFundOrderData1Schema, type MutualFundOrderData1 } from "./mutual-fund-order-data1.js";
import { statusSchema, type Status } from "./status.js";

export type GetMutualFundOrderDetailsResponse = {
  status?: Status;
  /** Mutual fund order details. */
  data?: MutualFundOrderData1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getMutualFundOrderDetailsResponseSchema: Schema<GetMutualFundOrderDetailsResponse> =
  s.object<GetMutualFundOrderDetailsResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => mutualFundOrderData1Schema)),
    },
    { additionalProperties: s.json() },
  );
