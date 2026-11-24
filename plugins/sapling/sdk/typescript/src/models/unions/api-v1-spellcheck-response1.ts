import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1SpellcheckResponseInternalSchema,
  apiV1SpellcheckResponseSchema,
} from "../api-v1-spellcheck-response.js";

export type ApiV1SpellcheckResponse1 = unknown;

export const apiV1SpellcheckResponse1InternalSchema: Schema<ApiV1SpellcheckResponse1> =
  s.of<ApiV1SpellcheckResponse1>(s.union([s.lazy(() => apiV1SpellcheckResponseInternalSchema), s.unknown()]));

export const apiV1SpellcheckResponse1Schema: Schema<ApiV1SpellcheckResponse1> = s.lazySchema(() =>
  s.of<ApiV1SpellcheckResponse1>(s.union([s.lazy(() => apiV1SpellcheckResponseSchema), s.unknown()])),
);
