import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Budgeted record reads only. `relevance` when `query` chose which blocks to show; the blocks are
 * then not contiguous.
 */
export const Order = {
  InOrder: "in_order",
  Relevance: "relevance",
} as const;
export type Order = (typeof Order)[keyof typeof Order] | (string & {});

export const orderSchema: EnumSchema<Order> = s.enumOf<Order>(Order);
