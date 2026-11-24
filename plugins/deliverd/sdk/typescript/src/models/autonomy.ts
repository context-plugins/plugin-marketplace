import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Autonomy = {
  Assist: "assist",
  Recommend: "recommend",
  ActWithApproval: "act_with_approval",
  ActAutonomously: "act_autonomously",
} as const;
export type Autonomy = (typeof Autonomy)[keyof typeof Autonomy] | (string & {});

export const autonomySchema: EnumSchema<Autonomy> = s.enumOf<Autonomy>(Autonomy);
