import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result4InternalSchema, result4Schema, type Result4 } from "./result4.js";

export type GrokMonitorResponse = {
  success: boolean;
  /** Grok response data */
  result: Result4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const grokMonitorResponseProperties: s.Shape<GrokMonitorResponse> = {
  success: s.boolean(),
  result: result4InternalSchema,
};

export const grokMonitorResponseInternalSchema: Schema<GrokMonitorResponse> = s.object<GrokMonitorResponse>(
  grokMonitorResponseProperties,
  { additionalProperties: s.json() },
);

export const grokMonitorResponseSchema: Schema<GrokMonitorResponse> = s.lazySchema(() =>
  s.object<GrokMonitorResponse>(
    {
      ...grokMonitorResponseProperties,
      result: result4Schema,
    },
    { additionalProperties: s.json() },
  ),
);
