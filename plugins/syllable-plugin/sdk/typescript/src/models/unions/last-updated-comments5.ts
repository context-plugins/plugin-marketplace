import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit to the organization. */
export type LastUpdatedComments5 = string;

export const lastUpdatedComments5Schema: Schema<LastUpdatedComments5> = s.of<LastUpdatedComments5>(
  s.union([s.string()]),
);
