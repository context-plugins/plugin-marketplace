import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To return utterances that were recognized and handled, use Detected. To return utterances that
 * were not recognized, use Missed.
 */
export const StatusType = {
  Detected: "Detected",
  Missed: "Missed",
} as const;
export type StatusType = (typeof StatusType)[keyof typeof StatusType] | (string & {});

export const statusTypeSchema: EnumSchema<StatusType> = s.enumOf<StatusType>(StatusType);
