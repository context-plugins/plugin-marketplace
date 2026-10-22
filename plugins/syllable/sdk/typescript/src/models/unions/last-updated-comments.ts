import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit to the tool. */
export type LastUpdatedComments = string;

export const lastUpdatedCommentsSchema: Schema<LastUpdatedComments> = s.of<LastUpdatedComments>(
  s.union([s.string()]),
);
