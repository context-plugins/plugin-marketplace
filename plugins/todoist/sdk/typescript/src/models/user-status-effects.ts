import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pauseActivityEffectSchema, type PauseActivityEffect } from "./pause-activity-effect.js";
import {
  pauseNotificationsEffectSchema,
  type PauseNotificationsEffect,
} from "./pause-notifications-effect.js";

/**
 * The optional behaviors a status enables. Empty for an informational status. Each effect is
 * independent: a status may carry either, both, or neither.
 */
export type UserStatusEffects = {
  /** Pauses the user's notifications, in products that support it, while the status is active. */
  pauseNotifications?: PauseNotificationsEffect | null;
  /**
   * Pauses the user's productivity metrics (Karma and streaks) in Todoist while the status is
   * active, as Vacation Mode does.
   */
  pauseActivity?: PauseActivityEffect | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userStatusEffectsSchema: Schema<UserStatusEffects> = s.object<UserStatusEffects>(
  {
    pauseNotifications: s.optionalNullable(s.lazy(() => pauseNotificationsEffectSchema)),
    pauseActivity: s.optionalNullable(s.lazy(() => pauseActivityEffectSchema)),
    _keysMap: {
      pauseNotifications: "pause_notifications",
      pauseActivity: "pause_activity",
    },
  },
  { additionalProperties: s.json() },
);
