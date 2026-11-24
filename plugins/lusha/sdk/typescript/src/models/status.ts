import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lifecycle state. `active` and `archived` are filterable via the List Tables `status` field;
 * `deleted` is not a filterable status.
 */
export const Status = {
  Active: "active",
  Archived: "archived",
  Deleted: "deleted",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
