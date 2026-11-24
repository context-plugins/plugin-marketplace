import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InternallyReviewedBy = string;

export const internallyReviewedBySchema: Schema<InternallyReviewedBy> = s.of<InternallyReviewedBy>(
  s.union([s.string()]),
);
