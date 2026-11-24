import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TracingConfiguration = {
  /** When set to true, X-Ray tracing is enabled. */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tracingConfigurationSchema: Schema<TracingConfiguration> = s.object<TracingConfiguration>(
  {
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
