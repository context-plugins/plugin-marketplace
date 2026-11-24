import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1PurchasesDestinationsResponse3Schema,
  type ApiV1PurchasesDestinationsResponse3,
} from "../api-v1-purchases-destinations-response3.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1PurchasesDestinationsResponse31 = Error | ApiV1PurchasesDestinationsResponse3;

export const apiV1PurchasesDestinationsResponse31Schema: Schema<ApiV1PurchasesDestinationsResponse31> =
  s.of<ApiV1PurchasesDestinationsResponse31>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1PurchasesDestinationsResponse3Schema)]),
  );
