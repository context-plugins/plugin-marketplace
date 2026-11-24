import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gateSchema, type Gate } from "./gate.js";
import { receiptSchema, type Receipt } from "./receipt.js";

export type ApiV1GatesReleaseResponse = {
  receipt: Receipt;
  gate: Gate;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1GatesReleaseResponseSchema: Schema<ApiV1GatesReleaseResponse> =
  s.object<ApiV1GatesReleaseResponse>(
    {
      receipt: receiptSchema,
      gate: gateSchema,
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
