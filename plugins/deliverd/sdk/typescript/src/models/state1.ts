import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type State1 = {
  currentState: string | null;
  openQuestions: string[];
  constraints: string[];
  blockedBy: string[];
  nextAction: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const state1Schema: Schema<State1> = s.object<State1>(
  {
    currentState: s.nullable(s.string()),
    openQuestions: s.array(s.string()),
    constraints: s.array(s.string()),
    blockedBy: s.array(s.string()),
    nextAction: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
