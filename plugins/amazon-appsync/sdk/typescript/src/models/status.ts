import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The cache instance status. AVAILABLE: The instance is available for use. CREATING: The instance
 * is currently creating. DELETING: The instance is currently deleting. MODIFYING: The instance is
 * currently modifying. FAILED: The instance has failed creation.
 */
export const Status = {
  Available: "AVAILABLE",
  Creating: "CREATING",
  Deleting: "DELETING",
  Modifying: "MODIFYING",
  Failed: "FAILED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
