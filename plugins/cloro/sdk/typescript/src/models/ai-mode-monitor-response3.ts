import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result15InternalSchema, result15Schema, type Result15 } from "./result15.js";

export type AiModeMonitorResponse3 = {
  success: boolean;
  /** AI Mode response data */
  result: Result15;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aiModeMonitorResponse3Properties: s.Shape<AiModeMonitorResponse3> = {
  success: s.boolean(),
  result: result15InternalSchema,
};

export const aiModeMonitorResponse3InternalSchema: Schema<AiModeMonitorResponse3> =
  s.object<AiModeMonitorResponse3>(aiModeMonitorResponse3Properties, { additionalProperties: s.json() });

export const aiModeMonitorResponse3Schema: Schema<AiModeMonitorResponse3> = s.lazySchema(() =>
  s.object<AiModeMonitorResponse3>(
    {
      ...aiModeMonitorResponse3Properties,
      result: result15Schema,
    },
    { additionalProperties: s.json() },
  ),
);
