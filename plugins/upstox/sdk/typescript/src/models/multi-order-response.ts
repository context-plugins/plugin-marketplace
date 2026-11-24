import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { multiOrderDataSchema, type MultiOrderData } from "./multi-order-data.js";
import { multiOrderErrorSchema, type MultiOrderError } from "./multi-order-error.js";
import { multiOrderSummary1Schema, type MultiOrderSummary1 } from "./multi-order-summary1.js";
import { statusSchema, type Status } from "./status.js";

export type MultiOrderResponse = {
  status?: Status;
  /** Response data for multi order request */
  data?: MultiOrderData[];
  /** Error details for multi order request */
  errors?: MultiOrderError[];
  /** Execution summary for multi order request */
  summary?: MultiOrderSummary1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiOrderResponseSchema: Schema<MultiOrderResponse> = s.object<MultiOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => multiOrderDataSchema))),
    errors: s.optional(s.array(s.lazy(() => multiOrderErrorSchema))),
    summary: s.optional(s.lazy(() => multiOrderSummary1Schema)),
  },
  { additionalProperties: s.json() },
);
