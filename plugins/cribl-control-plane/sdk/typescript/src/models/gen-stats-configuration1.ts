import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration specific to the Pipeline Function. */
export type GenStatsConfiguration1 = {
  /** List of field names from which to generate statistics. */
  fields?: string[];
};

export const genStatsConfiguration1Schema: Schema<GenStatsConfiguration1> = s.object<GenStatsConfiguration1>({
  fields: s.optional(s.array(s.string())),
});
