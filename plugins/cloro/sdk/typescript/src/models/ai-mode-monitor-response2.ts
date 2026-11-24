import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result10InternalSchema, result10Schema, type Result10 } from "./result10.js";

export type AiModeMonitorResponse2 = {
  success: boolean;
  /** AI Mode response data */
  result: Result10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aiModeMonitorResponse2Properties: s.Shape<AiModeMonitorResponse2> = {
  success: s.boolean(),
  result: result10InternalSchema,
};

export const aiModeMonitorResponse2InternalSchema: Schema<AiModeMonitorResponse2> =
  s.object<AiModeMonitorResponse2>(aiModeMonitorResponse2Properties, { additionalProperties: s.json() });

export const aiModeMonitorResponse2Schema: Schema<AiModeMonitorResponse2> = s.lazySchema(() =>
  s.object<AiModeMonitorResponse2>(
    {
      ...aiModeMonitorResponse2Properties,
      result: result10Schema,
    },
    { additionalProperties: s.json() },
  ),
);
