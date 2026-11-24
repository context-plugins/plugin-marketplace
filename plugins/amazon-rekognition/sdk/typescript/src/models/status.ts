import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the dataset. */
export const Status = {
  CreateInProgress: "CREATE_IN_PROGRESS",
  CreateComplete: "CREATE_COMPLETE",
  CreateFailed: "CREATE_FAILED",
  UpdateInProgress: "UPDATE_IN_PROGRESS",
  UpdateComplete: "UPDATE_COMPLETE",
  UpdateFailed: "UPDATE_FAILED",
  DeleteInProgress: "DELETE_IN_PROGRESS",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
