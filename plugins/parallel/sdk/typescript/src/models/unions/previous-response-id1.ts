import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of a previous response to use as conversation context. */
export type PreviousResponseId1 = string;

export const previousResponseId1Schema: Schema<PreviousResponseId1> = s.of<PreviousResponseId1>(
  s.union([s.string()]),
);
