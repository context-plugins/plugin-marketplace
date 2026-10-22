import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ID of the label (listing the quality of the session and any issues that occurred) associated with
 * the session
 */
export type SessionLabelId = string;

export const sessionLabelIdSchema: Schema<SessionLabelId> = s.of<SessionLabelId>(s.union([s.string()]));
