import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { displayRulesSchema, type DisplayRules } from "./display-rules.js";

export type TeamDisplayRulesResponse = {
  displayRules?: DisplayRules;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamDisplayRulesResponseSchema: Schema<TeamDisplayRulesResponse> =
  s.object<TeamDisplayRulesResponse>(
    {
      displayRules: s.optional(s.lazy(() => displayRulesSchema)),
    },
    { additionalProperties: s.json() },
  );
