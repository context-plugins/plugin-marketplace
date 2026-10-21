import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagImportConfigurationPost = {
  config: Record<string, Record<string, unknown>>;
  /** Tags to associate with the configuration */
  tags?: string[];
  /** Name to identify the configuration */
  name?: string;
};

export const flagImportConfigurationPostSchema: Schema<FlagImportConfigurationPost> =
  s.object<FlagImportConfigurationPost>({
    config: s.record(s.string(), s.record(s.string(), s.unknown())),
    tags: s.optional(s.array(s.string())),
    name: s.optional(s.string()),
  });
