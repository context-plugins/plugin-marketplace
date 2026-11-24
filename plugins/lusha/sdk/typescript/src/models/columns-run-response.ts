import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

/**
 * Run is asynchronous — this response confirms the run was accepted. Poll Get Table for per-column
 * row-status counts to know when it's finished.
 */
export type ColumnsRunResponse = {
  data?: Data;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const columnsRunResponseSchema: Schema<ColumnsRunResponse> = s.object<ColumnsRunResponse>(
  {
    data: s.optional(s.lazy(() => dataSchema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  },
  { additionalProperties: s.json() },
);
