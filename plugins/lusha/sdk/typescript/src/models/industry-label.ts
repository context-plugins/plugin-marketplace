import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subIndustrySchema, type SubIndustry } from "./sub-industry.js";

export type IndustryLabel = {
  mainIndustry?: string;
  mainIndustryId?: number;
  subIndustries?: SubIndustry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const industryLabelSchema: Schema<IndustryLabel> = s.object<IndustryLabel>(
  {
    mainIndustry: s.optional(s.string()),
    mainIndustryId: s.optional(s.float64()),
    subIndustries: s.optional(s.array(s.lazy(() => subIndustrySchema))),
    _keysMap: {
      mainIndustry: "main_industry",
      mainIndustryId: "main_industry_id",
      subIndustries: "sub_industries",
    },
  },
  { additionalProperties: s.json() },
);
