import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeAiVisionGeneralResponse = {
  data?: Data;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeAiVisionGeneralResponseSchema: Schema<AnalyzeAiVisionGeneralResponse> =
  s.object<AnalyzeAiVisionGeneralResponse>({
    data: s.optional(s.lazy(() => dataSchema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
