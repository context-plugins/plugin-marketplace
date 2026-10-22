import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the results to only the reports that were created by the users with these IDs. */
export type CreatorId2 = string[];

export const creatorId2Schema: Schema<CreatorId2> = s.of<CreatorId2>(s.union([s.array(s.string())]));
