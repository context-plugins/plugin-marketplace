import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the user who created the report. */
export type CreatorId = string;

export const creatorIdSchema: Schema<CreatorId> = s.of<CreatorId>(s.union([s.string()]));
