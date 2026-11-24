import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verdictSchema, type Verdict } from "./verdict.js";

/**
 * What your model or decision engine recommends. Shown to the approver as context, never as the
 * decision. Where the organisation has blind review on, a high or critical risk request's
 * recommendation is shown only after the approver records their own view
 */
export type Recommendation = {
  /** approve or reject */
  verdict: Verdict;
  /** The recommendation in a line */
  summary?: string;
  /** How sure it is, from 0 to 1 */
  confidence?: number;
  /** Why, as the system explains it */
  rationale?: string;
  /** Which model or engine made it */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recommendationProperties: s.Shape<Recommendation> = {
  verdict: verdictSchema,
  summary: s.optional(s.string()),
  confidence: s.optional(s.float64()),
  rationale: s.optional(s.string()),
  source: s.optional(s.string()),
};

export const recommendationInternalSchema: Schema<Recommendation> = s.object<Recommendation>(
  recommendationProperties,
  { additionalProperties: s.json() },
);

export const recommendationSchema: Schema<Recommendation> = s.lazySchema(() =>
  s.object<Recommendation>(
    {
      ...recommendationProperties,
      summary: s.optional(s.string().check(s.maxLength(300))),
      confidence: s.optional(s.float64().check(s.gte(0), s.lte(1))),
      rationale: s.optional(s.string().check(s.maxLength(4000))),
      source: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
