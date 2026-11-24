import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleRecordSchema, type SamplingRuleRecord } from "./sampling-rule-record.js";

export type CreateSamplingRuleResult = {
  samplingRuleRecord?: SamplingRuleRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSamplingRuleResultSchema: Schema<CreateSamplingRuleResult> =
  s.object<CreateSamplingRuleResult>(
    {
      samplingRuleRecord: s.optional(s.lazy(() => samplingRuleRecordSchema)),
      _keysMap: {
        samplingRuleRecord: "SamplingRuleRecord",
      },
    },
    { additionalProperties: s.json() },
  );
