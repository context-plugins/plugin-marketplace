import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessPeriodSchema, type AccessPeriod } from "./access-period.js";

export type Product = {
  product?: string;
  accountId?: string;
  accessPeriod?: AccessPeriod;
};

export const productSchema: Schema<Product> = s.object<Product>({
  product: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accessPeriod: s.optional(s.lazy(() => accessPeriodSchema)),
});
