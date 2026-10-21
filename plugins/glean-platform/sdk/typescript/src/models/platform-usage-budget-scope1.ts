import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the reached budget belongs to the evaluated target or is shared with others. */
export const PlatformUsageBudgetScope1 = {
  Target: "TARGET",
  Shared: "SHARED",
} as const;
export type PlatformUsageBudgetScope1 =
  | (typeof PlatformUsageBudgetScope1)[keyof typeof PlatformUsageBudgetScope1]
  | (string & {});

export const platformUsageBudgetScope1Schema: EnumSchema<PlatformUsageBudgetScope1> =
  s.enumOf<PlatformUsageBudgetScope1>(PlatformUsageBudgetScope1);
