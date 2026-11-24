import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { apiV1ToneResponseSchema } from "../api-v1-tone-response.js";

export type ApiV1ToneResponse1 = unknown;

export const apiV1ToneResponse1Schema: Schema<ApiV1ToneResponse1> = s.of<ApiV1ToneResponse1>(
  s.union([s.lazy(() => apiV1ToneResponseSchema), s.unknown()]),
);
