import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes the `order.installmentOptions.merchantAdviceCodeSupported` field to the Fiserv API. */
export type Merchantadvicecodesupported = boolean;

export const merchantadvicecodesupportedSchema: Schema<Merchantadvicecodesupported> =
  s.of<Merchantadvicecodesupported>(s.union([s.boolean()]));
