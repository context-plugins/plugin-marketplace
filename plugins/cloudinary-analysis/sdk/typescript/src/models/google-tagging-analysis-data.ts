import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { labelAnnotationsSchema, type LabelAnnotations } from "./label-annotations.js";

export type GoogleTaggingAnalysisData = {
  labelAnnotations: LabelAnnotations;
};

export const googleTaggingAnalysisDataSchema: Schema<GoogleTaggingAnalysisData> =
  s.object<GoogleTaggingAnalysisData>({
    labelAnnotations: labelAnnotationsSchema,
    _keysMap: {
      labelAnnotations: "label_annotations",
    },
  });
