import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectScopeSchema, type EffectScope } from "./effect-scope.js";

export type PauseNotificationsEffect = {
  /** May be omitted, which means `all`. */
  scope?: EffectScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pauseNotificationsEffectSchema: Schema<PauseNotificationsEffect> =
  s.object<PauseNotificationsEffect>(
    {
      scope: s.optional(s.lazy(() => effectScopeSchema)),
    },
    { additionalProperties: s.json() },
  );
