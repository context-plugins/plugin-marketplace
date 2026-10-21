import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenStatsConfiguration = {
  /** List of field names from which to generate statistics. */
  fields?: string[];
};

export const genStatsConfigurationSchema: Schema<GenStatsConfiguration> = s.object<GenStatsConfiguration>({
  fields: s.optional(s.array(s.string())),
});
