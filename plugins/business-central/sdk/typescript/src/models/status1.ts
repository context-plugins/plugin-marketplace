import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the environment */
export const Status1 = {
  NotReady: "NotReady",
  Removing: "Removing",
  Preparing: "Preparing",
  Active: "Active",
  Upgrading: "Upgrading",
  CreatingFailed: "CreatingFailed",
  RemovingFailed: "RemovingFailed",
  SoftDeleting: "SoftDeleting",
  SoftDeletingFailed: "SoftDeletingFailed",
  SoftDeleted: "SoftDeleted",
  Recovering: "Recovering",
  RecoveringFailed: "RecoveringFailed",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
