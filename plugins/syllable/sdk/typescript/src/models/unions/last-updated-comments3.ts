import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Free text providing comment about what was updated */
export type LastUpdatedComments3 = string;

export const lastUpdatedComments3Schema: Schema<LastUpdatedComments3> = s.of<LastUpdatedComments3>(
  s.union([s.string()]),
);
