import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The migration plan action for the database. */
export const PlanAction = {
  ActionUnspecified: "ACTION_UNSPECIFIED",
  Create: "CREATE",
  Update: "UPDATE",
  Skip: "SKIP",
  DependencyFailure: "DEPENDENCY_FAILURE",
  Error: "ERROR",
} as const;
export type PlanAction = (typeof PlanAction)[keyof typeof PlanAction] | (string & {});

export const planActionSchema: EnumSchema<PlanAction> = s.enumOf<PlanAction>(PlanAction);
