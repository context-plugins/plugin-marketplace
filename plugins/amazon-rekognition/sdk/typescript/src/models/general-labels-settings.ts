import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeneralLabelsSettings = {
  /** The labels that should be included in the return from DetectLabels. */
  labelInclusionFilters?: string[];
  /** The labels that should be excluded from the return from DetectLabels. */
  labelExclusionFilters?: string[];
  /** The label categories that should be included in the return from DetectLabels. */
  labelCategoryInclusionFilters?: string[];
  /** The label categories that should be excluded from the return from DetectLabels. */
  labelCategoryExclusionFilters?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generalLabelsSettingsSchema: Schema<GeneralLabelsSettings> = s.object<GeneralLabelsSettings>(
  {
    labelInclusionFilters: s.optional(s.array(s.string())),
    labelExclusionFilters: s.optional(s.array(s.string())),
    labelCategoryInclusionFilters: s.optional(s.array(s.string())),
    labelCategoryExclusionFilters: s.optional(s.array(s.string())),
    _keysMap: {
      labelInclusionFilters: "LabelInclusionFilters",
      labelExclusionFilters: "LabelExclusionFilters",
      labelCategoryInclusionFilters: "LabelCategoryInclusionFilters",
      labelCategoryExclusionFilters: "LabelCategoryExclusionFilters",
    },
  },
  { additionalProperties: s.json() },
);
