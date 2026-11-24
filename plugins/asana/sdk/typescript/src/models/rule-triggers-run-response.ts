import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";

export type RuleTriggersRunResponse = {
  data?: Data1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleTriggersRunResponseSchema: Schema<RuleTriggersRunResponse> =
  s.object<RuleTriggersRunResponse>(
    {
      data: s.optional(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  );
