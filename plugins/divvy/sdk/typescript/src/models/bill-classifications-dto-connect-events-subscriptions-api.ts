import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** General ledger classifications information for the bill. */
export type BillClassificationsDtoConnectEventsSubscriptionsApi = {
  chartOfAccountId?: string;
  accountingClassId?: string;
  departmentId?: string;
  locationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billClassificationsDtoConnectEventsSubscriptionsApiSchema: Schema<BillClassificationsDtoConnectEventsSubscriptionsApi> =
  s.object<BillClassificationsDtoConnectEventsSubscriptionsApi>(
    {
      chartOfAccountId: s.optional(s.string()),
      accountingClassId: s.optional(s.string()),
      departmentId: s.optional(s.string()),
      locationId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
