import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderTabbyApiReferencePaymentsApiSchema,
  type OrderTabbyApiReferencePaymentsApi,
} from "./order-tabby-api-reference-payments-api.js";

export type ApiV2PaymentsRequest = {
  order?: OrderTabbyApiReferencePaymentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2PaymentsRequestSchema: Schema<ApiV2PaymentsRequest> = s.object<ApiV2PaymentsRequest>(
  {
    order: s.optional(s.lazy(() => orderTabbyApiReferencePaymentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
