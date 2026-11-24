import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1SipaccountsResponse1Schema,
  type ApiV1SipaccountsResponse1,
} from "../api-v1-sipaccounts-response1.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1SipaccountsResponse11 = Error | ApiV1SipaccountsResponse1;

export const apiV1SipaccountsResponse11Schema: Schema<ApiV1SipaccountsResponse11> =
  s.of<ApiV1SipaccountsResponse11>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1SipaccountsResponse1Schema)]),
  );
