import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rulesetSchema, type Ruleset } from "./ruleset.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1StyleguideRulesetsResponse2 = {
  created?: boolean;
  ruleset?: Ruleset;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StyleguideRulesetsResponse2Schema: Schema<ApiV1StyleguideRulesetsResponse2> =
  s.object<ApiV1StyleguideRulesetsResponse2>(
    {
      created: s.optional(s.boolean()),
      ruleset: s.optional(s.lazy(() => rulesetSchema)),
      usage: s.optional(s.lazy(() => usageSchema)),
    },
    { additionalProperties: s.json() },
  );
