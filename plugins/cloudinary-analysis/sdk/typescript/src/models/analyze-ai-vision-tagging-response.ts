import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeAiVisionTaggingResponse = {
  data?: Data2;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeAiVisionTaggingResponseSchema: Schema<AnalyzeAiVisionTaggingResponse> =
  s.object<AnalyzeAiVisionTaggingResponse>({
    data: s.optional(s.lazy(() => data2Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
