import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result5InternalSchema, result5Schema, type Result5 } from "./result5.js";

export type AiModeMonitorResponse = {
  success: boolean;
  /** AI Mode response data */
  result: Result5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aiModeMonitorResponseProperties: s.Shape<AiModeMonitorResponse> = {
  success: s.boolean(),
  result: result5InternalSchema,
};

export const aiModeMonitorResponseInternalSchema: Schema<AiModeMonitorResponse> =
  s.object<AiModeMonitorResponse>(aiModeMonitorResponseProperties, { additionalProperties: s.json() });

export const aiModeMonitorResponseSchema: Schema<AiModeMonitorResponse> = s.lazySchema(() =>
  s.object<AiModeMonitorResponse>(
    {
      ...aiModeMonitorResponseProperties,
      result: result5Schema,
    },
    { additionalProperties: s.json() },
  ),
);
