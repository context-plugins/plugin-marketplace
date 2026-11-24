import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1SentimentResponseSchema } from "../api-v1-sentiment-response.js";

export type ApiV1SentimentResponse1 = unknown;

export const apiV1SentimentResponse1Schema: Schema<ApiV1SentimentResponse1> = s.of<ApiV1SentimentResponse1>(
  s.union([s.lazy(() => apiV1SentimentResponseSchema), s.unknown()]),
);
