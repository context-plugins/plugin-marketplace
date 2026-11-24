import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationDidlogicComPurchasesApiSchema,
  type PaginationDidlogicComPurchasesApi,
} from "./pagination-didlogic-com-purchases-api.js";
import { smSchema, type Sm } from "./sm.js";

export type ApiV1SmsResponse = {
  pagination: PaginationDidlogicComPurchasesApi;
  /** List of SMS messages */
  sms: Sm[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SmsResponseSchema: Schema<ApiV1SmsResponse> = s.object<ApiV1SmsResponse>(
  {
    pagination: paginationDidlogicComPurchasesApiSchema,
    sms: s.array(s.lazy(() => smSchema)),
  },
  { additionalProperties: s.json() },
);
