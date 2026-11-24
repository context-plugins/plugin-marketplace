import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV2NumbersRiskChecksResponse2Schema,
  type ApiV2NumbersRiskChecksResponse2,
} from "../api-v2-numbers-risk-checks-response2.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV2NumbersRiskChecksResponse21 = Error | ApiV2NumbersRiskChecksResponse2;

export const apiV2NumbersRiskChecksResponse21Schema: Schema<ApiV2NumbersRiskChecksResponse21> =
  s.of<ApiV2NumbersRiskChecksResponse21>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV2NumbersRiskChecksResponse2Schema)]),
  );
