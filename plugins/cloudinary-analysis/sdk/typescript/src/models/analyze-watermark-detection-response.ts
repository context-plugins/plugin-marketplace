import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data15Schema, type Data15 } from "./data15.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeWatermarkDetectionResponse = {
  data?: Data15;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeWatermarkDetectionResponseSchema: Schema<AnalyzeWatermarkDetectionResponse> =
  s.object<AnalyzeWatermarkDetectionResponse>({
    data: s.optional(s.lazy(() => data15Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
