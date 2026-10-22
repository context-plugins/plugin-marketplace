import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The AI rating of the session */
export type Rating = string;

export const ratingSchema: Schema<Rating> = s.of<Rating>(s.union([s.string()]));
