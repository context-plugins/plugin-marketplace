import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RelatedExperimentRep = {
  key?: string;
  name?: string;
  environment?: string;
};

export const relatedExperimentRepSchema: Schema<RelatedExperimentRep> = s.object<RelatedExperimentRep>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  environment: s.optional(s.string()),
});
