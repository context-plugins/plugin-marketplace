import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Timestamp of the creation of the run, in RFC 3339 format., Timestamp of the creation of the task,
 * as an RFC 3339 string.
 */
export type CreatedAt = string;

export const createdAtSchema: Schema<CreatedAt> = s.of<CreatedAt>(s.union([s.string()]));
