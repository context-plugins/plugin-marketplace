import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response1Schema, type Response1 } from "./response1.js";

export type AiVisionModerationAnalysisData = {
  responses: Response1[];
  modelVersion?: number;
};

export const aiVisionModerationAnalysisDataSchema: Schema<AiVisionModerationAnalysisData> =
  s.object<AiVisionModerationAnalysisData>({
    responses: s.array(s.lazy(() => response1Schema)),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
