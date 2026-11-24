import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { samplingRuleUpdateSchema, type SamplingRuleUpdate } from "./sampling-rule-update.js";

export type UpdateSamplingRuleRequest = {
  samplingRuleUpdate: SamplingRuleUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSamplingRuleRequestSchema: Schema<UpdateSamplingRuleRequest> =
  s.object<UpdateSamplingRuleRequest>(
    {
      samplingRuleUpdate: samplingRuleUpdateSchema,
      _keysMap: {
        samplingRuleUpdate: "SamplingRuleUpdate",
      },
    },
    { additionalProperties: s.json() },
  );
