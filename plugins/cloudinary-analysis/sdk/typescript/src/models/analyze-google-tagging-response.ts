import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data9Schema, type Data9 } from "./data9.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeGoogleTaggingResponse = {
  data?: Data9;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeGoogleTaggingResponseSchema: Schema<AnalyzeGoogleTaggingResponse> =
  s.object<AnalyzeGoogleTaggingResponse>({
    data: s.optional(s.lazy(() => data9Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
