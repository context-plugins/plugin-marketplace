import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique identifier for the call associated with the uploaded file */
export type CallId = string;

export const callIdSchema: Schema<CallId> = s.of<CallId>(s.union([s.string()]));
