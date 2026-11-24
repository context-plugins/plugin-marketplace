import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The starting state, if anything is already known */
export type State = {
  /** Where the work stands now, in a few sentences. Replaces the previous one */
  currentState?: string | null;
  /** The full list of open questions, replacing the current one */
  openQuestions?: string[];
  /** Questions to add to the list without restating it */
  addOpenQuestions?: string[];
  /** Questions that are now answered, to take off the list */
  resolveOpenQuestions?: string[];
  /** What the work must respect, replacing the current list */
  constraints?: string[];
  /** What is in the way right now, replacing the current list; empty when nothing is */
  blockedBy?: string[];
  /** The single next step */
  nextAction?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stateProperties: s.Shape<State> = {
  currentState: s.optionalNullable(s.string()),
  openQuestions: s.optional(s.array(s.string())),
  addOpenQuestions: s.optional(s.array(s.string())),
  resolveOpenQuestions: s.optional(s.array(s.string())),
  constraints: s.optional(s.array(s.string())),
  blockedBy: s.optional(s.array(s.string())),
  nextAction: s.optionalNullable(s.string()),
};

export const stateInternalSchema: Schema<State> = s.object<State>(stateProperties, {
  additionalProperties: s.json(),
});

export const stateSchema: Schema<State> = s.lazySchema(() =>
  s.object<State>(
    {
      ...stateProperties,
      currentState: s.optionalNullable(s.string().check(s.maxLength(2000))),
      openQuestions: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(20)),
      ),
      addOpenQuestions: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(20)),
      ),
      resolveOpenQuestions: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(20)),
      ),
      constraints: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(20)),
      ),
      blockedBy: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(10)),
      ),
      nextAction: s.optionalNullable(s.string().check(s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
