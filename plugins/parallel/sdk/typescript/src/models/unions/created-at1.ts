import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of the creation of the group, as an RFC 3339 string. */
export type CreatedAt1 = string;

export const createdAt1Schema: Schema<CreatedAt1> = s.of<CreatedAt1>(s.union([s.string()]));
