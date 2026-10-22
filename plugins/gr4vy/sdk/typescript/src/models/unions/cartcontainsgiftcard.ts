import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the current transaction includes a gift card purchase. */
export type Cartcontainsgiftcard = boolean;

export const cartcontainsgiftcardSchema: Schema<Cartcontainsgiftcard> = s.of<Cartcontainsgiftcard>(
  s.union([s.boolean()]),
);
