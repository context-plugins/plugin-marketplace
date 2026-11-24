import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result1InternalSchema, result1Schema, type Result1 } from "./result1.js";

export type GeminiMonitorResponse = {
  success: boolean;
  /** Gemini response data */
  result: Result1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const geminiMonitorResponseProperties: s.Shape<GeminiMonitorResponse> = {
  success: s.boolean(),
  result: result1InternalSchema,
};

export const geminiMonitorResponseInternalSchema: Schema<GeminiMonitorResponse> =
  s.object<GeminiMonitorResponse>(geminiMonitorResponseProperties, { additionalProperties: s.json() });

export const geminiMonitorResponseSchema: Schema<GeminiMonitorResponse> = s.lazySchema(() =>
  s.object<GeminiMonitorResponse>(
    {
      ...geminiMonitorResponseProperties,
      result: result1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
