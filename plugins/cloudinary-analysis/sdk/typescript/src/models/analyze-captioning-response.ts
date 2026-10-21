import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeCaptioningResponse = {
  data?: Data3;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeCaptioningResponseSchema: Schema<AnalyzeCaptioningResponse> =
  s.object<AnalyzeCaptioningResponse>({
    data: s.optional(s.lazy(() => data3Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
