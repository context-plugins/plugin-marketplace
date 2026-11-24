import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

export type V3CompanySignalsResponse = {
  results?: Result[];
  startDate?: string;
  endDate?: string;
  /**
   * Added to a Prospecting, Enrich, Signals, or Lookalike response when `tableId` is passed on the
   * request. The primary response is unaffected even if the table write fails.
   */
  tableWrite?: TableWrite;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompanySignalsResponseSchema: Schema<V3CompanySignalsResponse> =
  s.object<V3CompanySignalsResponse>(
    {
      results: s.optional(s.array(s.lazy(() => resultSchema))),
      startDate: s.optional(s.string()),
      endDate: s.optional(s.string()),
      tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
      billing: s.optional(s.lazy(() => v3BillingSchema)),
    },
    { additionalProperties: s.json() },
  );
