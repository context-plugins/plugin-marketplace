import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data10Schema, type Data10 } from "./data10.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";

export type AnalyzeHumanAnatomyResponse = {
  data?: Data10;
  limits?: LimitsObject | null;
  requestId?: string;
};

export const analyzeHumanAnatomyResponseSchema: Schema<AnalyzeHumanAnatomyResponse> =
  s.object<AnalyzeHumanAnatomyResponse>({
    data: s.optional(s.lazy(() => data10Schema)),
    limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  });
