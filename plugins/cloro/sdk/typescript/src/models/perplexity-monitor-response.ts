import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result2InternalSchema, result2Schema, type Result2 } from "./result2.js";

export type PerplexityMonitorResponse = {
  success: boolean;
  /** Perplexity response data */
  result: Result2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const perplexityMonitorResponseProperties: s.Shape<PerplexityMonitorResponse> = {
  success: s.boolean(),
  result: result2InternalSchema,
};

export const perplexityMonitorResponseInternalSchema: Schema<PerplexityMonitorResponse> =
  s.object<PerplexityMonitorResponse>(perplexityMonitorResponseProperties, {
    additionalProperties: s.json(),
  });

export const perplexityMonitorResponseSchema: Schema<PerplexityMonitorResponse> = s.lazySchema(() =>
  s.object<PerplexityMonitorResponse>(
    {
      ...perplexityMonitorResponseProperties,
      result: result2Schema,
    },
    { additionalProperties: s.json() },
  ),
);
