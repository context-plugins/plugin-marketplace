import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

export type RuleTriggersRunRequest = {
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleTriggersRunRequestSchema: Schema<RuleTriggersRunRequest> = s.object<RuleTriggersRunRequest>(
  {
    data: s.optional(s.lazy(() => dataSchema)),
  },
  { additionalProperties: s.json() },
);
