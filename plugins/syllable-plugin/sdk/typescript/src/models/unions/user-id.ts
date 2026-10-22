import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the user interacting with the system when the event occurred (e.g., their phone number) */
export type UserId = string;

export const userIdSchema: Schema<UserId> = s.of<UserId>(s.union([s.string()]));
