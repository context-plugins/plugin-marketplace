import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tableStatusDataInternalSchema,
  tableStatusDataSchema,
  type TableStatusData,
} from "./table-status-data.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";

export type TableResponse = {
  /** Response payload for Get Table — TableDto fields plus live entity/column counts. */
  data?: TableStatusData;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableResponseProperties: s.Shape<TableResponse> = {
  data: s.optional(s.lazy(() => tableStatusDataInternalSchema)),
  billing: s.optional(s.lazy(() => v3BillingSchema)),
};

export const tableResponseInternalSchema: Schema<TableResponse> = s.object<TableResponse>(
  tableResponseProperties,
  { additionalProperties: s.json() },
);

export const tableResponseSchema: Schema<TableResponse> = s.lazySchema(() =>
  s.object<TableResponse>(
    {
      ...tableResponseProperties,
      data: s.optional(s.lazy(() => tableStatusDataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
