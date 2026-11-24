import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED. */
export const StatusPerigonMonitorsApi = {
  Draft: "DRAFT",
  Active: "ACTIVE",
  Stopped: "STOPPED",
  Archived: "ARCHIVED",
} as const;
export type StatusPerigonMonitorsApi =
  | (typeof StatusPerigonMonitorsApi)[keyof typeof StatusPerigonMonitorsApi]
  | (string & {});

export const statusPerigonMonitorsApiSchema: EnumSchema<StatusPerigonMonitorsApi> =
  s.enumOf<StatusPerigonMonitorsApi>(StatusPerigonMonitorsApi);
