import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Returns only custom language models with the specified status. Language models are ordered by
 * creation date, with the newest model first. If you do not include StatusEquals, all custom
 * language models are returned.
 */
export const StatusEquals = {
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type StatusEquals = (typeof StatusEquals)[keyof typeof StatusEquals] | (string & {});

export const statusEqualsSchema: EnumSchema<StatusEquals> = s.enumOf<StatusEquals>(StatusEquals);
