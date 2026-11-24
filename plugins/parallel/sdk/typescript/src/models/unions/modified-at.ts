import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Timestamp of the latest modification to the FindAll run result, in RFC 3339 format., Timestamp of
 * the last status update to the group, as an RFC 3339 string.
 */
export type ModifiedAt = string;

export const modifiedAtSchema: Schema<ModifiedAt> = s.of<ModifiedAt>(s.union([s.string()]));
