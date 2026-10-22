import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The comments for the most recent edit to the directory member */
export type Comments = string;

export const commentsSchema: Schema<Comments> = s.of<Comments>(s.union([s.string()]));
