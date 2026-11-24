import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { appliesWhenSchema, type AppliesWhen } from "./applies-when.js";

export type Requirement = {
  /** The framework's own reference, e.g. 4.2 or UW-1 */
  ref: string;
  /** What it asks, in a sentence */
  title: string;
  /** Controls that evidence it: common ones or your own custom_ controls */
  controls: string[];
  /** Conditions on the governance profile; every one given must hold */
  appliesWhen?: AppliesWhen;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const requirementProperties: s.Shape<Requirement> = {
  ref: s.string(),
  title: s.string(),
  controls: s.array(s.string()),
  appliesWhen: s.optional(s.lazy(() => appliesWhenSchema)),
};

export const requirementInternalSchema: Schema<Requirement> = s.object<Requirement>(requirementProperties, {
  additionalProperties: s.json(),
});

export const requirementSchema: Schema<Requirement> = s.lazySchema(() =>
  s.object<Requirement>(
    {
      ...requirementProperties,
      ref: s.string().check(s.minLength(1), s.maxLength(60)),
      title: s.string().check(s.minLength(1), s.maxLength(300)),
      controls: s
        .array(s.string().check(s.pattern("^[a-z][a-z0-9_]{1,59}$")))
        .check(s.minLength(1), s.maxLength(20)),
    },
    { additionalProperties: s.json() },
  ),
);
