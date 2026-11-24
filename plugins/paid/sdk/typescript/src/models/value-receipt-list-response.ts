import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueReceiptSummaryInternalSchema,
  valueReceiptSummarySchema,
  type ValueReceiptSummary,
} from "./value-receipt-summary.js";

export type ValueReceiptListResponse = {
  data: ValueReceiptSummary[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const valueReceiptListResponseProperties: s.Shape<ValueReceiptListResponse> = {
  data: s.array(s.lazy(() => valueReceiptSummaryInternalSchema)),
  total: s.int(),
};

export const valueReceiptListResponseInternalSchema: Schema<ValueReceiptListResponse> =
  s.object<ValueReceiptListResponse>(valueReceiptListResponseProperties, { additionalProperties: s.json() });

export const valueReceiptListResponseSchema: Schema<ValueReceiptListResponse> = s.lazySchema(() =>
  s.object<ValueReceiptListResponse>(
    {
      ...valueReceiptListResponseProperties,
      data: s.array(s.lazy(() => valueReceiptSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
