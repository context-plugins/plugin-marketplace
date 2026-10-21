import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeGoogleLogoDetectionResponse = {
  data?: Data8;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeGoogleLogoDetectionResponseSchema: Schema<AnalyzeGoogleLogoDetectionResponse> =
  s.object<AnalyzeGoogleLogoDetectionResponse>({
    data: s.optional(s.lazy(() => data8Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
