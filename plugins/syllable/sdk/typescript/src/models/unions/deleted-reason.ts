import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Reason for batch deletion */
export type DeletedReason = string;

export const deletedReasonSchema: Schema<DeletedReason> = s.of<DeletedReason>(s.union([s.string()]));
