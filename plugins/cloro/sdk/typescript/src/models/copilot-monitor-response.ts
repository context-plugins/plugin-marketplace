import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultInternalSchema, resultSchema, type Result } from "./result.js";

export type CopilotMonitorResponse = {
  success: boolean;
  /** Copilot response data */
  result: Result;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const copilotMonitorResponseProperties: s.Shape<CopilotMonitorResponse> = {
  success: s.boolean(),
  result: resultInternalSchema,
};

export const copilotMonitorResponseInternalSchema: Schema<CopilotMonitorResponse> =
  s.object<CopilotMonitorResponse>(copilotMonitorResponseProperties, { additionalProperties: s.json() });

export const copilotMonitorResponseSchema: Schema<CopilotMonitorResponse> = s.lazySchema(() =>
  s.object<CopilotMonitorResponse>(
    {
      ...copilotMonitorResponseProperties,
      result: resultSchema,
    },
    { additionalProperties: s.json() },
  ),
);
