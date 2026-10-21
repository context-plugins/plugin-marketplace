import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { samplingRuleSchema, type SamplingRule } from "./sampling-rule.js";

export type FunctionConfSchemaSampling = {
  /** Events matching these rules will be sampled at the given rate */
  rules?: SamplingRule[];
};

export const functionConfSchemaSamplingSchema: Schema<FunctionConfSchemaSampling> =
  s.object<FunctionConfSchemaSampling>({
    rules: s.optional(s.array(s.lazy(() => samplingRuleSchema))),
  });
