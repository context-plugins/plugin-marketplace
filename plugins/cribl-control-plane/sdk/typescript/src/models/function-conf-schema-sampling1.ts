import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { samplingRuleSchema, type SamplingRule } from "./sampling-rule.js";

/** Configuration specific to the Pipeline Function. */
export type FunctionConfSchemaSampling1 = {
  /** Events matching these rules will be sampled at the given rate */
  rules?: SamplingRule[];
};

export const functionConfSchemaSampling1Schema: Schema<FunctionConfSchemaSampling1> =
  s.object<FunctionConfSchemaSampling1>({
    rules: s.optional(s.array(s.lazy(() => samplingRuleSchema))),
  });
