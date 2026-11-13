import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keyResultValueSchema, type KeyResultValue } from "./key-result-value.js";

export type UpdateKeyResult = {
  /** The name of the Key Result. */
  name?: string;
  /** The starting value of the Key Result. */
  initialObservedValue?: KeyResultValue;
  /** The starting value of the Key Result. */
  observedValue?: KeyResultValue;
  /** The starting value of the Key Result. */
  targetValue?: KeyResultValue;
};

const updateKeyResultProperties: s.Shape<UpdateKeyResult> = {
  name: s.optional(s.string()),
  initialObservedValue: s.optional(s.lazy(() => keyResultValueSchema)),
  observedValue: s.optional(s.lazy(() => keyResultValueSchema)),
  targetValue: s.optional(s.lazy(() => keyResultValueSchema)),
  _keysMap: {
    initialObservedValue: "initial_observed_value",
    observedValue: "observed_value",
    targetValue: "target_value",
  },
};

export const updateKeyResultInternalSchema: Schema<UpdateKeyResult> =
  s.object<UpdateKeyResult>(updateKeyResultProperties);

export const updateKeyResultSchema: Schema<UpdateKeyResult> = s.lazySchema(() =>
  s.object<UpdateKeyResult>({
    ...updateKeyResultProperties,
    name: s.optional(s.string().check(s.maxLength(1024))),
  }),
);
