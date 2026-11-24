import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required initial monitor status. Accepts ACTIVE or DRAFT. */
export const Status1PerigonMonitorsApi = {
  Active: "ACTIVE",
  Draft: "DRAFT",
} as const;
export type Status1PerigonMonitorsApi =
  | (typeof Status1PerigonMonitorsApi)[keyof typeof Status1PerigonMonitorsApi]
  | (string & {});

export const status1PerigonMonitorsApiSchema: EnumSchema<Status1PerigonMonitorsApi> =
  s.enumOf<Status1PerigonMonitorsApi>(Status1PerigonMonitorsApi);
