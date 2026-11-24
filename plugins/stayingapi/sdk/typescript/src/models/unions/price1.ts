import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { priceInternalSchema, priceSchema, type Price } from "../price.js";

export type Price1 = Price;

export const price1InternalSchema: Schema<Price1> = s.of<Price1>(
  s.union([s.lazy(() => priceInternalSchema)]),
);

export const price1Schema: Schema<Price1> = s.lazySchema(() =>
  s.of<Price1>(s.union([s.lazy(() => priceSchema)])),
);
