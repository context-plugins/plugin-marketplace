import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Human-readable status message for the group. */
export type StatusMessage = string;

export const statusMessageSchema: Schema<StatusMessage> = s.of<StatusMessage>(s.union([s.string()]));
