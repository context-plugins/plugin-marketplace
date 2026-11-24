import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  newsBatchResponseInternalSchema,
  newsBatchResponseSchema,
  type NewsBatchResponse,
} from "../news-batch-response.js";
import { newsResponseInternalSchema, newsResponseSchema, type NewsResponse } from "../news-response.js";

export type NewsResponse1 = NewsResponse | NewsBatchResponse;

export const newsResponse1InternalSchema: Schema<NewsResponse1> = s.of<NewsResponse1>(
  s.union([s.lazy(() => newsResponseInternalSchema), s.lazy(() => newsBatchResponseInternalSchema)]),
);

export const newsResponse1Schema: Schema<NewsResponse1> = s.lazySchema(() =>
  s.of<NewsResponse1>(s.union([s.lazy(() => newsResponseSchema), s.lazy(() => newsBatchResponseSchema)])),
);
