import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gateSchema, type Gate } from "./gate.js";
import { receiptSchema, type Receipt } from "./receipt.js";

export type ApiV1GatesExecutionResponse = {
  receipt: Receipt;
  gate: Gate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GatesExecutionResponseSchema: Schema<ApiV1GatesExecutionResponse> =
  s.object<ApiV1GatesExecutionResponse>(
    {
      receipt: receiptSchema,
      gate: gateSchema,
    },
    { additionalProperties: s.json() },
  );
