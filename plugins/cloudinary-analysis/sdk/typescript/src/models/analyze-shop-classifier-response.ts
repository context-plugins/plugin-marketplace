import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data13Schema, type Data13 } from "./data13.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeShopClassifierResponse = {
  data?: Data13;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeShopClassifierResponseSchema: Schema<AnalyzeShopClassifierResponse> =
  s.object<AnalyzeShopClassifierResponse>({
    data: s.optional(s.lazy(() => data13Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
