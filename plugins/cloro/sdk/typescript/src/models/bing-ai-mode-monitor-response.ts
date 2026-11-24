import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result14InternalSchema, result14Schema, type Result14 } from "./result14.js";

export type BingAiModeMonitorResponse = {
  success: boolean;
  /** Bing AI Mode response data */
  result: Result14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bingAiModeMonitorResponseProperties: s.Shape<BingAiModeMonitorResponse> = {
  success: s.boolean(),
  result: result14InternalSchema,
};

export const bingAiModeMonitorResponseInternalSchema: Schema<BingAiModeMonitorResponse> =
  s.object<BingAiModeMonitorResponse>(bingAiModeMonitorResponseProperties, {
    additionalProperties: s.json(),
  });

export const bingAiModeMonitorResponseSchema: Schema<BingAiModeMonitorResponse> = s.lazySchema(() =>
  s.object<BingAiModeMonitorResponse>(
    {
      ...bingAiModeMonitorResponseProperties,
      result: result14Schema,
    },
    { additionalProperties: s.json() },
  ),
);
