import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1EditsRejectResponse1Schema,
  type ApiV1EditsRejectResponse1,
} from "../api-v1-edits-reject-response1.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1EditsRejectResponse11 = Error | ApiV1EditsRejectResponse1;

export const apiV1EditsRejectResponse11Schema: Schema<ApiV1EditsRejectResponse11> =
  s.of<ApiV1EditsRejectResponse11>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1EditsRejectResponse1Schema)]),
  );
