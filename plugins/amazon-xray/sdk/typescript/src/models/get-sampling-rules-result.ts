import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleRecordSchema, type SamplingRuleRecord } from "./sampling-rule-record.js";

export type GetSamplingRulesResult = {
  /** Rule definitions and metadata. */
  samplingRuleRecords?: SamplingRuleRecord[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSamplingRulesResultSchema: Schema<GetSamplingRulesResult> = s.object<GetSamplingRulesResult>(
  {
    samplingRuleRecords: s.optional(s.array(s.lazy(() => samplingRuleRecordSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      samplingRuleRecords: "SamplingRuleRecords",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
