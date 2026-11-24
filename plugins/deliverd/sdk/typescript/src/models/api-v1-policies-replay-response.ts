import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { byActionSchema, type ByAction } from "./by-action.js";
import { exampleSchema, type Example } from "./example.js";
import { transitionSchema, type Transition } from "./transition.js";

export type ApiV1PoliciesReplayResponse = {
  policyName: string;
  days: number;
  since: string;
  /** Past requests evaluated twice */
  replayed: number;
  changed: number;
  unchanged: number;
  /** Would ask less of the request than now */
  loosened: number;
  tightened: number;
  /** A person rejected it; the proposal would allow it without asking */
  rejectedNowAllowed: number;
  /** Same effect, decided by a different rule */
  ruleChanged: number;
  transitions: Transition[];
  byAction: ByAction[];
  examples: Example[];
  truncated: boolean;
  notes: string[];
  /** Whether this breaks the `failOn` line */
  fail: boolean;
  failReason: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesReplayResponseSchema: Schema<ApiV1PoliciesReplayResponse> =
  s.object<ApiV1PoliciesReplayResponse>(
    {
      policyName: s.string(),
      days: s.int(),
      since: s.string(),
      replayed: s.int(),
      changed: s.int(),
      unchanged: s.int(),
      loosened: s.int(),
      tightened: s.int(),
      rejectedNowAllowed: s.int(),
      ruleChanged: s.int(),
      transitions: s.array(s.lazy(() => transitionSchema)),
      byAction: s.array(s.lazy(() => byActionSchema)),
      examples: s.array(s.lazy(() => exampleSchema)),
      truncated: s.boolean(),
      notes: s.array(s.string()),
      fail: s.boolean(),
      failReason: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
