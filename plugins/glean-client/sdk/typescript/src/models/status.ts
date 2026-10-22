import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * whether this team is fully processed or there are still unprocessed operations that'll affect it
 */
export const Status = {
  Processed: "PROCESSED",
  QueuedForCreation: "QUEUED_FOR_CREATION",
  QueuedForDeletion: "QUEUED_FOR_DELETION",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
