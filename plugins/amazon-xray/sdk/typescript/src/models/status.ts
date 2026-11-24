import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The encryption status. While the status is UPDATING, X-Ray may encrypt data with a combination of
 * the new and old settings.
 */
export const Status = {
  Updating: "UPDATING",
  Active: "ACTIVE",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
