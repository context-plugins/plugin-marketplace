import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Additional state information that includes status reported by the agent. */
export const Substate = {
  Unspecified: "UNSPECIFIED",
  Unhealthy: "UNHEALTHY",
  StaleStatus: "STALE_STATUS",
} as const;
export type Substate = (typeof Substate)[keyof typeof Substate] | (string & {});

export const substateSchema: EnumSchema<Substate> = s.enumOf<Substate>(Substate);
