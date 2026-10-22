import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deliveredToSchema, type DeliveredTo } from "../delivered-to.js";

/** Indicates whether the item will be shipped or picked up. */
export type DeliveredTo1 = DeliveredTo;

export const deliveredTo1Schema: Schema<DeliveredTo1> = s.of<DeliveredTo1>(
  s.union([s.lazy(() => deliveredToSchema)]),
);
