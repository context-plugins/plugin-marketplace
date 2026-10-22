import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeAiVisionModerationResponse = {
  data?: Data1;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeAiVisionModerationResponseSchema: Schema<AnalyzeAiVisionModerationResponse> =
  s.object<AnalyzeAiVisionModerationResponse>({
    data: s.optional(s.lazy(() => data1Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
