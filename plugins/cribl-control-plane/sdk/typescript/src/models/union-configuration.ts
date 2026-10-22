import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnionConfiguration = {
  /** The id for this search job. */
  searchJobId?: string;
  /** The stages we are unioning with. */
  stageIds?: string[];
};

export const unionConfigurationSchema: Schema<UnionConfiguration> = s.object<UnionConfiguration>({
  searchJobId: s.optional(s.string()),
  stageIds: s.optional(s.array(s.string())),
});
