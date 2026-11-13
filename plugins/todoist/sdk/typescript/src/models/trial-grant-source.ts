import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrialGrantSource = {
  TwistMigration: "twist_migration",
} as const;
export type TrialGrantSource = (typeof TrialGrantSource)[keyof typeof TrialGrantSource] | (string & {});

export const trialGrantSourceSchema: EnumSchema<TrialGrantSource> =
  s.enumOf<TrialGrantSource>(TrialGrantSource);
