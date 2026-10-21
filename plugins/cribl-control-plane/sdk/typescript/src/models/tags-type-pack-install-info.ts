import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Categorization tags for the Pack. */
export type TagsTypePackInstallInfo = {
  /** List of data type tags for the Pack. */
  dataType?: string[];
  /** List of domain tags for the Pack. */
  domain?: string[];
  /** List of stream tags for routing and filtering. */
  streamtags?: string[];
  /** List of technology tags for the Pack. */
  technology?: string[];
};

export const tagsTypePackInstallInfoSchema: Schema<TagsTypePackInstallInfo> =
  s.object<TagsTypePackInstallInfo>({
    dataType: s.optional(s.array(s.string())),
    domain: s.optional(s.array(s.string())),
    streamtags: s.optional(s.array(s.string())),
    technology: s.optional(s.array(s.string())),
  });
