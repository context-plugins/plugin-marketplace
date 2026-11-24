import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvoicesRequest1 = {
  description?: string;
  receipt?: string;
  comment?: string;
  terms?: string;
  partialPayment?: boolean;
  expireBy?: number;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Replaces existing line items. Draft status only. */
  lineItems?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoicesRequest1Properties: s.Shape<InvoicesRequest1> = {
  description: s.optional(s.string()),
  receipt: s.optional(s.string()),
  comment: s.optional(s.string()),
  terms: s.optional(s.string()),
  partialPayment: s.optional(s.boolean()),
  expireBy: s.optional(s.int()),
  notes: s.optional(s.record(s.string(), s.string())),
  lineItems: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    partialPayment: "partial_payment",
    expireBy: "expire_by",
    lineItems: "line_items",
  },
};

export const invoicesRequest1InternalSchema: Schema<InvoicesRequest1> = s.object<InvoicesRequest1>(
  invoicesRequest1Properties,
  { additionalProperties: s.json() },
);

export const invoicesRequest1Schema: Schema<InvoicesRequest1> = s.lazySchema(() =>
  s.object<InvoicesRequest1>(
    {
      ...invoicesRequest1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
