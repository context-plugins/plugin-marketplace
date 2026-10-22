import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit to the user. */
export type LastUpdatedComments4 = string;

export const lastUpdatedComments4Schema: Schema<LastUpdatedComments4> = s.of<LastUpdatedComments4>(
  s.union([s.string()]),
);
