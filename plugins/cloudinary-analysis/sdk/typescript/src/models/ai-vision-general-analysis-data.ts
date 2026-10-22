import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type AiVisionGeneralAnalysisData = {
  responses: Response[];
  modelVersion?: number;
};

export const aiVisionGeneralAnalysisDataSchema: Schema<AiVisionGeneralAnalysisData> =
  s.object<AiVisionGeneralAnalysisData>({
    responses: s.array(s.lazy(() => responseSchema)),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
