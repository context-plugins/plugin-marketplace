import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PreviousResponseId = string;

export const previousResponseIdSchema: Schema<PreviousResponseId> = s.of<PreviousResponseId>(
  s.union([s.string()]),
);
