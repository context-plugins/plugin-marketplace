import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1EditsResponseInternalSchema, apiV1EditsResponseSchema } from "../api-v1-edits-response.js";

export type ApiV1EditsResponse1 = unknown;

export const apiV1EditsResponse1InternalSchema: Schema<ApiV1EditsResponse1> = s.of<ApiV1EditsResponse1>(
  s.union([s.lazy(() => apiV1EditsResponseInternalSchema), s.unknown()]),
);

export const apiV1EditsResponse1Schema: Schema<ApiV1EditsResponse1> = s.lazySchema(() =>
  s.of<ApiV1EditsResponse1>(s.union([s.lazy(() => apiV1EditsResponseSchema), s.unknown()])),
);
