import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Email of the user who created the directory member */
export type CreatedBy = string;

export const createdBySchema: Schema<CreatedBy> = s.of<CreatedBy>(s.union([s.string()]));
