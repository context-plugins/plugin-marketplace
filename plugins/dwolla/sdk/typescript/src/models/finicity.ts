import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productSchema, type Product } from "./product.js";

export type Finicity = {
  profile?: number;
  version?: string;
  receiptId?: string;
  receiptVersion?: string;
  customerId?: string;
  partnerId?: number;
  products?: Product[];
  timestamp?: Date;
};

export const finicitySchema: Schema<Finicity> = s.object<Finicity>({
  profile: s.optional(s.int()),
  version: s.optional(s.string()),
  receiptId: s.optional(s.string()),
  receiptVersion: s.optional(s.string()),
  customerId: s.optional(s.string()),
  partnerId: s.optional(s.int()),
  products: s.optional(s.array(s.lazy(() => productSchema))),
  timestamp: s.optional(s.dateTime()),
});
