import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Target context for subsequent event processing after applying the Route: <code>group</code>
 * (Worker Group or Edge Fleet) or <code>pack</code>.
 */
export const TargetContext2 = {
  Group: "group",
  Pack: "pack",
} as const;
export type TargetContext2 = (typeof TargetContext2)[keyof typeof TargetContext2] | (string & {});

export const targetContext2Schema: EnumSchema<TargetContext2> = s.enumOf<TargetContext2>(TargetContext2);
