import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of event that has occurred */
export const EventType = {
  Revoked: "revoked",
  Expired: "expired",
  Updated: "updated",
  Created: "created",
  Archived: "archived",
  Deleted: "deleted",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
