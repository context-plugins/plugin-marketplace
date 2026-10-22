import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type AiVisionTaggingAnalysisData = {
  tags: Tag[];
  modelVersion?: number;
};

export const aiVisionTaggingAnalysisDataSchema: Schema<AiVisionTaggingAnalysisData> =
  s.object<AiVisionTaggingAnalysisData>({
    tags: s.array(s.lazy(() => tagSchema)),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
