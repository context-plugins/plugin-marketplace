import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter activities to only those initiated by the specified user ID(s). Accepts either a single
 * user ID or a list of user IDs. Useful for shared projects to see who made which changes.
 */
export type InitiatorId = number | number[];

export const initiatorIdSchema: Schema<InitiatorId> = s.of<InitiatorId>(s.union([s.int(), s.array(s.int())]));
