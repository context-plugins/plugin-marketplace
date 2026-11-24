import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { triggerInternalSchema, triggerSchema, type Trigger } from "./trigger.js";
import { step2InternalSchema, step2Schema, type Step2 } from "./unions/step2.js";

export type Definition = {
  trigger: Trigger;
  steps: Step2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const definitionProperties: s.Shape<Definition> = {
  trigger: triggerInternalSchema,
  steps: s.array(s.lazy(() => step2InternalSchema)),
};

export const definitionInternalSchema: Schema<Definition> = s.object<Definition>(definitionProperties, {
  additionalProperties: s.json(),
});

export const definitionSchema: Schema<Definition> = s.lazySchema(() =>
  s.object<Definition>(
    {
      ...definitionProperties,
      trigger: triggerSchema,
      steps: s.array(s.lazy(() => step2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
