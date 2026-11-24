import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1EditsAcceptResponse1Schema,
  type ApiV1EditsAcceptResponse1,
} from "../api-v1-edits-accept-response1.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1EditsAcceptResponse11 = Error | ApiV1EditsAcceptResponse1;

export const apiV1EditsAcceptResponse11Schema: Schema<ApiV1EditsAcceptResponse11> =
  s.of<ApiV1EditsAcceptResponse11>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1EditsAcceptResponse1Schema)]),
  );
