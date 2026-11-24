import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleRecordSchema, type SamplingRuleRecord } from "./sampling-rule-record.js";

export type UpdateSamplingRuleResult = {
  samplingRuleRecord?: SamplingRuleRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSamplingRuleResultSchema: Schema<UpdateSamplingRuleResult> =
  s.object<UpdateSamplingRuleResult>(
    {
      samplingRuleRecord: s.optional(s.lazy(() => samplingRuleRecordSchema)),
      _keysMap: {
        samplingRuleRecord: "SamplingRuleRecord",
      },
    },
    { additionalProperties: s.json() },
  );
