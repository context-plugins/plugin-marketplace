import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data14Schema, type Data14 } from "./data14.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeUnidetResponse = {
  data?: Data14;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeUnidetResponseSchema: Schema<AnalyzeUnidetResponse> = s.object<AnalyzeUnidetResponse>({
  data: s.optional(s.lazy(() => data14Schema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
