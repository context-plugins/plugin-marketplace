import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type BaseAnalyzeResponse = {
  limits?: LimitsObject | null;
  requestId?: string;
};

export const baseAnalyzeResponseSchema: Schema<BaseAnalyzeResponse> = s.object<BaseAnalyzeResponse>({
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
});
