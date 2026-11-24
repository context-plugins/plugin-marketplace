import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV2NumbersPurchaseResponse1Schema,
  type ApiV2NumbersPurchaseResponse1,
} from "../api-v2-numbers-purchase-response1.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV2NumbersPurchaseResponse11 = Error | ApiV2NumbersPurchaseResponse1;

export const apiV2NumbersPurchaseResponse11Schema: Schema<ApiV2NumbersPurchaseResponse11> =
  s.of<ApiV2NumbersPurchaseResponse11>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV2NumbersPurchaseResponse1Schema)]),
  );
