import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter to a single execution. Values come from `event_group_id` in webhook events and listed
 * events. Pagination params are ignored when set.
 */
export type EventGroupId = string;

export const eventGroupIdSchema: Schema<EventGroupId> = s.of<EventGroupId>(s.union([s.string()]));
