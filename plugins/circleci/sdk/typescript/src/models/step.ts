import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionInternalSchema, actionSchema, type Action } from "./action.js";

export type Step = {
  /** The step name */
  name?: string;
  /** Actions within the step */
  actions?: Action[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stepProperties: s.Shape<Step> = {
  name: s.optional(s.string()),
  actions: s.optional(s.array(s.lazy(() => actionInternalSchema))),
};

export const stepInternalSchema: Schema<Step> = s.object<Step>(stepProperties, {
  additionalProperties: s.json(),
});

export const stepSchema: Schema<Step> = s.lazySchema(() =>
  s.object<Step>(
    {
      ...stepProperties,
      actions: s.optional(s.array(s.lazy(() => actionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
