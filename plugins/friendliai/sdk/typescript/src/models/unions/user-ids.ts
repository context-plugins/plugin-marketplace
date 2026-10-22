import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Return only usage for these users. */
export type UserIds = string[];

export const userIdsSchema: Schema<UserIds> = s.of<UserIds>(s.union([s.array(s.string())]));
