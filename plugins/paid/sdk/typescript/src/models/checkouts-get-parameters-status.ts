import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutsGetParametersStatus = {
  Active: "active",
  Completed: "completed",
  Archived: "archived",
} as const;
export type CheckoutsGetParametersStatus =
  | (typeof CheckoutsGetParametersStatus)[keyof typeof CheckoutsGetParametersStatus]
  | (string & {});

export const checkoutsGetParametersStatusSchema: EnumSchema<CheckoutsGetParametersStatus> =
  s.enumOf<CheckoutsGetParametersStatus>(CheckoutsGetParametersStatus);
