import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1CompleteAcceptResponse1Schema,
  type ApiV1CompleteAcceptResponse1,
} from "../api-v1-complete-accept-response1.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1CompleteAcceptResponse11 = Error | ApiV1CompleteAcceptResponse1;

export const apiV1CompleteAcceptResponse11Schema: Schema<ApiV1CompleteAcceptResponse11> =
  s.of<ApiV1CompleteAcceptResponse11>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1CompleteAcceptResponse1Schema)]),
  );
