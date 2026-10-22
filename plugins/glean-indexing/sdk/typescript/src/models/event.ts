import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event */
export const Event = {
  Uploaded: "UPLOADED",
  Indexed: "INDEXED",
  DeletionRequested: "DELETION_REQUESTED",
  Deleted: "DELETED",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
