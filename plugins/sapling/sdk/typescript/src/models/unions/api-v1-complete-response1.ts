import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1CompleteResponseSchema } from "../api-v1-complete-response.js";

export type ApiV1CompleteResponse1 = unknown;

export const apiV1CompleteResponse1Schema: Schema<ApiV1CompleteResponse1> = s.of<ApiV1CompleteResponse1>(
  s.union([s.lazy(() => apiV1CompleteResponseSchema), s.unknown()]),
);
