import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments for the most recent edit to the role. */
export type LastUpdatedComments2 = string;

export const lastUpdatedComments2Schema: Schema<LastUpdatedComments2> = s.of<LastUpdatedComments2>(
  s.union([s.string()]),
);
