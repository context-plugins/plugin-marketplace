import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userStatusEffectsSchema, type UserStatusEffects } from "./user-status-effects.js";

/** A complete stored status. Unknown stored fields survive partial updates. */
export type UserStatus = {
  /** The status text. Surrounding whitespace is trimmed. */
  message: string;
  /** An optional single emoji. */
  emoji?: string | null;
  /**
   * When the status and its effects expire, in UTC. `null` or omitted means it stays until cleared.
   */
  activeUntil?: Date | null;
  /**
   * The optional behaviors a status enables. Empty for an informational status. Each effect is
   * independent: a status may carry either, both, or neither.
   */
  effects?: UserStatusEffects;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userStatusProperties: s.Shape<UserStatus> = {
  message: s.string(),
  emoji: s.optionalNullable(s.string()),
  activeUntil: s.optionalNullable(s.dateTime()),
  effects: s.optional(s.lazy(() => userStatusEffectsSchema)),
  _keysMap: {
    activeUntil: "active_until",
  },
};

export const userStatusInternalSchema: Schema<UserStatus> = s.object<UserStatus>(userStatusProperties, {
  additionalProperties: s.json(),
});

export const userStatusSchema: Schema<UserStatus> = s.lazySchema(() =>
  s.object<UserStatus>(
    {
      ...userStatusProperties,
      message: s.string().check(s.minLength(1), s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
