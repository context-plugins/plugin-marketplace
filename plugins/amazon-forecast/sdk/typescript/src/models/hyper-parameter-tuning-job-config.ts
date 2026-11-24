import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { parameterRangesSchema, type ParameterRanges } from "./parameter-ranges.js";

export type HyperParameterTuningJobConfig = {
  parameterRanges?: ParameterRanges;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hyperParameterTuningJobConfigSchema: Schema<HyperParameterTuningJobConfig> =
  s.object<HyperParameterTuningJobConfig>(
    {
      parameterRanges: s.optional(s.lazy(() => parameterRangesSchema)),
      _keysMap: {
        parameterRanges: "ParameterRanges",
      },
    },
    { additionalProperties: s.json() },
  );
