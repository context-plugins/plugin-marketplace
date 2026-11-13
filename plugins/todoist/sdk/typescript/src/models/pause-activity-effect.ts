import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectScopeSchema, type EffectScope } from "./effect-scope.js";

export type PauseActivityEffect = {
  /** May be omitted, which means `all`. */
  scope?: EffectScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pauseActivityEffectSchema: Schema<PauseActivityEffect> = s.object<PauseActivityEffect>(
  {
    scope: s.optional(s.lazy(() => effectScopeSchema)),
  },
  { additionalProperties: s.json() },
);
