import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SalesOrderCreate = {
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

const salesOrderCreateProperties: s.Shape<SalesOrderCreate> = {
  externalDocumentNumber: s.optional(s.string()),
  orderDate: s.optional(s.dateOnly()),
  customerId: s.optional(s.string()),
  customerNumber: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricesIncludeTax: s.optional(s.boolean()),
  requestedDeliveryDate: s.optional(s.dateOnly()),
};

export const salesOrderCreateInternalSchema: Schema<SalesOrderCreate> = s.object<SalesOrderCreate>(
  salesOrderCreateProperties,
  { additionalProperties: s.json() },
);

export const salesOrderCreateSchema: Schema<SalesOrderCreate> = s.lazySchema(() =>
  s.object<SalesOrderCreate>(
    {
      ...salesOrderCreateProperties,
      externalDocumentNumber: s.optional(s.string().check(s.maxLength(35))),
      customerNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
