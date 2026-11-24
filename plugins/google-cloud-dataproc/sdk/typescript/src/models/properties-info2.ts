import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { valueInfoSchema, type ValueInfo } from "./value-info.js";

/** Optional. Properties of the workload organized by origin. */
export type PropertiesInfo2 = {
  /** Output only. Properties set by autotuning engine. */
  autotuningProperties?: Record<string, ValueInfo>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const propertiesInfo2Schema: Schema<PropertiesInfo2> = s.object<PropertiesInfo2>(
  {
    autotuningProperties: s.optional(
      s.record(
        s.string(),
        s.lazy(() => valueInfoSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
