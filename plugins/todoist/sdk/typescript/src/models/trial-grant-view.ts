import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { trialGrantSourceSchema, type TrialGrantSource } from "./trial-grant-source.js";

export type TrialGrantView = {
  /** Where the grant comes from. */
  source: TrialGrantSource;
  /** Free days the next Business checkout starts, counted from activation. */
  trialDays: number;
  /**
   * Of `trial_days`, the days given on top of the time the team carried over, e.g. 90 for a
   * migrated Twist team.
   */
  bonusDays: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trialGrantViewSchema: Schema<TrialGrantView> = s.object<TrialGrantView>(
  {
    source: trialGrantSourceSchema,
    trialDays: s.int(),
    bonusDays: s.int(),
    _keysMap: {
      trialDays: "trial_days",
      bonusDays: "bonus_days",
    },
  },
  { additionalProperties: s.json() },
);
