import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data11Schema, type Data11 } from "./data11.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeImageQualityResponse = {
  data?: Data11;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeImageQualityResponseSchema: Schema<AnalyzeImageQualityResponse> =
  s.object<AnalyzeImageQualityResponse>({
    data: s.optional(s.lazy(() => data11Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
