import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data7Schema, type Data7 } from "./data7.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeCocoResponse = {
  data?: Data7;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeCocoResponseSchema: Schema<AnalyzeCocoResponse> = s.object<AnalyzeCocoResponse>({
  data: s.optional(s.lazy(() => data7Schema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
