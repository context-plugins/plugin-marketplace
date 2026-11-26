import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SalesOrderUpdate = {
  externalDocumentNumber?: string;
  orderDate?: string;
  customerId?: string;
  customerNumber?: string;
  currencyCode?: string;
  pricesIncludeTax?: boolean;
  requestedDeliveryDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const salesOrderUpdateProperties: s.Shape<SalesOrderUpdate> = {
  externalDocumentNumber: s.optional(s.string()),
  orderDate: s.optional(s.dateOnly()),
  customerId: s.optional(s.string()),
  customerNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  requestedDeliveryDate: s.optional(s.dateOnly()),
};

export const salesOrderUpdateInternalSchema: Schema<SalesOrderUpdate> = s.object<SalesOrderUpdate>(
  salesOrderUpdateProperties,
  { additionalProperties: s.json() },
);

export const salesOrderUpdateSchema: Schema<SalesOrderUpdate> = s.lazySchema(() =>
  s.object<SalesOrderUpdate>(
    {
      ...salesOrderUpdateProperties,
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      customerNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
