import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndustryClassification = {
  id?: string;
  name?: string;
};

export const industryClassificationSchema: Schema<IndustryClassification> = s.object<IndustryClassification>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
