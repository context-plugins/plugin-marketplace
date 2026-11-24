import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Specifies the preemptibility of the instance group.The default value for master and
 * worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary
 * instances is PREEMPTIBLE.
 */
export const Preemptibility = {
  PreemptibilityUnspecified: "PREEMPTIBILITY_UNSPECIFIED",
  NonPreemptible: "NON_PREEMPTIBLE",
  Preemptible: "PREEMPTIBLE",
  Spot: "SPOT",
} as const;
export type Preemptibility = (typeof Preemptibility)[keyof typeof Preemptibility] | (string & {});

export const preemptibilitySchema: EnumSchema<Preemptibility> = s.enumOf<Preemptibility>(Preemptibility);
