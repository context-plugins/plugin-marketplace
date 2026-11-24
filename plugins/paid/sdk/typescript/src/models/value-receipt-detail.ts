import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueReceiptDetail = {
  id: string;
  status: string;
  publicUrlToken: string;
  publicUrl: string;
  isPublished: boolean;
  customerId: string | null;
  customerName: string | null;
  customerExternalId: string | null;
  orderId: string | null;
  productId: string | null;
  currency: string;
  startDate: Date | null;
  endDate: Date | null;
  totalDeliveredValue: number | null;
  archivedAt: Date | null;
  createdAt: Date;
  publishedAt: Date | null;
  publishExpiresAt: Date | null;
  allowEmbed: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const valueReceiptDetailProperties: s.Shape<ValueReceiptDetail> = {
  id: s.string(),
  status: s.string(),
  publicUrlToken: s.string(),
  publicUrl: s.string(),
  isPublished: s.boolean(),
  customerId: s.nullable(s.string()),
  customerName: s.nullable(s.string()),
  customerExternalId: s.nullable(s.string()),
  orderId: s.nullable(s.string()),
  productId: s.nullable(s.string()),
  currency: s.string(),
  startDate: s.nullable(s.dateTime()),
  endDate: s.nullable(s.dateTime()),
  totalDeliveredValue: s.nullable(s.float64()),
  archivedAt: s.nullable(s.dateTime()),
  createdAt: s.dateTime(),
  publishedAt: s.nullable(s.dateTime()),
  publishExpiresAt: s.nullable(s.dateTime()),
  allowEmbed: s.boolean(),
};

export const valueReceiptDetailInternalSchema: Schema<ValueReceiptDetail> = s.object<ValueReceiptDetail>(
  valueReceiptDetailProperties,
  { additionalProperties: s.json() },
);

export const valueReceiptDetailSchema: Schema<ValueReceiptDetail> = s.lazySchema(() =>
  s.object<ValueReceiptDetail>(
    {
      ...valueReceiptDetailProperties,
      publicUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
