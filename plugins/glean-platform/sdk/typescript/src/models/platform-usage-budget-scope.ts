import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whose counter a reached usage limit measures, relative to the evaluated target. */
export const PlatformUsageBudgetScope = {
  Target: "TARGET",
  Shared: "SHARED",
} as const;
export type PlatformUsageBudgetScope =
  | (typeof PlatformUsageBudgetScope)[keyof typeof PlatformUsageBudgetScope]
  | (string & {});

export const platformUsageBudgetScopeSchema: EnumSchema<PlatformUsageBudgetScope> =
  s.enumOf<PlatformUsageBudgetScope>(PlatformUsageBudgetScope);
