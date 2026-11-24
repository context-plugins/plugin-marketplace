import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleSchema, type SamplingRule } from "./sampling-rule.js";

export type SamplingRuleRecord = {
  samplingRule?: SamplingRule;
  /** When the rule was created. */
  createdAt?: Date;
  /** When the rule was last modified. */
  modifiedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingRuleRecordSchema: Schema<SamplingRuleRecord> = s.object<SamplingRuleRecord>(
  {
    samplingRule: s.optional(s.lazy(() => samplingRuleSchema)),
    createdAt: s.optional(s.dateTime()),
    modifiedAt: s.optional(s.dateTime()),
    _keysMap: {
      samplingRule: "SamplingRule",
      createdAt: "CreatedAt",
      modifiedAt: "ModifiedAt",
    },
  },
  { additionalProperties: s.json() },
);
