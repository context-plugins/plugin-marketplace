import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data12Schema, type Data12 } from "./data12.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeLvisResponse = {
  data?: Data12;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeLvisResponseSchema: Schema<AnalyzeLvisResponse> = s.object<AnalyzeLvisResponse>({
  data: s.optional(s.lazy(() => data12Schema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
