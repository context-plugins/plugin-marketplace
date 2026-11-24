import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Additional state information, which includes status reported by the agent. */
export const Substate1 = {
  Unspecified: "UNSPECIFIED",
  Submitted: "SUBMITTED",
  Queued: "QUEUED",
  StaleStatus: "STALE_STATUS",
} as const;
export type Substate1 = (typeof Substate1)[keyof typeof Substate1] | (string & {});

export const substate1Schema: EnumSchema<Substate1> = s.enumOf<Substate1>(Substate1);
