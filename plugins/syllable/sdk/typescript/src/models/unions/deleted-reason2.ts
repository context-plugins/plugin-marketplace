import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When operation is delete, reason copied from the tool at delete time */
export type DeletedReason2 = string;

export const deletedReason2Schema: Schema<DeletedReason2> = s.of<DeletedReason2>(s.union([s.string()]));
