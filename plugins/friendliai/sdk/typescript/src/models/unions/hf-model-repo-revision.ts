import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * HF commit hash or revision of the model (e.g. main). Can only be used when `hfModelRepo` is
 * provided.
 */
export type HfModelRepoRevision = string;

export const hfModelRepoRevisionSchema: Schema<HfModelRepoRevision> = s.of<HfModelRepoRevision>(
  s.union([s.string()]),
);
