import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data5Schema, type Data5 } from "./data5.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeCldFashionResponse = {
  data?: Data5;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeCldFashionResponseSchema: Schema<AnalyzeCldFashionResponse> =
  s.object<AnalyzeCldFashionResponse>({
    data: s.optional(s.lazy(() => data5Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
