import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InternallyReviewedAt = Date;

export const internallyReviewedAtSchema: Schema<InternallyReviewedAt> = s.of<InternallyReviewedAt>(
  s.union([s.dateTime()]),
);
