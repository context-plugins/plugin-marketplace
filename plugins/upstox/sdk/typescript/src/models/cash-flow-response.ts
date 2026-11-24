import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cashFlowDataSchema, type CashFlowData } from "./cash-flow-data.js";
import { statusSchema, type Status } from "./status.js";

export type CashFlowResponse = {
  status?: Status;
  data?: CashFlowData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cashFlowResponseSchema: Schema<CashFlowResponse> = s.object<CashFlowResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => cashFlowDataSchema)),
  },
  { additionalProperties: s.json() },
);
