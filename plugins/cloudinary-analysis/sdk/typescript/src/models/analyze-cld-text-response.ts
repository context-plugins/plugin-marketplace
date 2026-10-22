import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeCldTextResponse = {
  data?: Data6;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeCldTextResponseSchema: Schema<AnalyzeCldTextResponse> = s.object<AnalyzeCldTextResponse>({
  data: s.optional(s.lazy(() => data6Schema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
