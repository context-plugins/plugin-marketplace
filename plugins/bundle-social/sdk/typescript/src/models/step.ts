import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionInternalSchema, conditionSchema, type Condition } from "./condition.js";

export type Step = {
  id?: string;
  /** @default "CONDITION" */
  type?: "CONDITION";
  conditions: Condition[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stepProperties: s.Shape<Step> = {
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("CONDITION"), "CONDITION"),
  conditions: s.array(s.lazy(() => conditionInternalSchema)),
};

export const stepInternalSchema: Schema<Step> = s.object<Step>(stepProperties, {
  additionalProperties: s.json(),
});

export const stepSchema: Schema<Step> = s.lazySchema(() =>
  s.object<Step>(
    {
      ...stepProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      conditions: s.array(s.lazy(() => conditionSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
