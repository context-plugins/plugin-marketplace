import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the specific object to get activities for. Requires the object's type, either in
 * `object_type` or as the only object type in `object_event_types`. For example, to get activities
 * for a specific task, set `object_id=<task_id>` with `object_type=item` or
 * `object_event_types=["item:"]`.
 */
export type ObjectId = number | string;

export const objectIdSchema: Schema<ObjectId> = s.of<ObjectId>(s.union([s.int(), s.string()]));
