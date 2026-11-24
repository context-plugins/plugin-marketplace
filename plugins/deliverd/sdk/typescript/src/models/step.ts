import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

export type Step = {
  /** A short key for the step, lowercase; made from the title when omitted */
  key?: string;
  title: string;
  /** What to do at this step, in a sentence or two */
  instruction: string;
  /**
   * What applies before the step's action: none, gate (check_gate for `action`), approval
   * (request_approval) or review (request_review). none when omitted
   */
  rule?: Rule;
  /** For a gate step: the action to check, such as payments.send */
  action?: string;
  /** Knowledge entries this step relies on */
  knowledgeIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stepProperties: s.Shape<Step> = {
  key: s.optional(s.string()),
  title: s.string(),
  instruction: s.string(),
  rule: s.optional(s.lazy(() => ruleSchema)),
  action: s.optional(s.string()),
  knowledgeIds: s.optional(s.array(s.string())),
};

export const stepInternalSchema: Schema<Step> = s.object<Step>(stepProperties, {
  additionalProperties: s.json(),
});

export const stepSchema: Schema<Step> = s.lazySchema(() =>
  s.object<Step>(
    {
      ...stepProperties,
      key: s.optional(s.string().check(s.maxLength(48))),
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      instruction: s.string().check(s.minLength(1), s.maxLength(4000)),
      action: s.optional(s.string().check(s.maxLength(100))),
      knowledgeIds: s.optional(s.array(s.string()).check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
