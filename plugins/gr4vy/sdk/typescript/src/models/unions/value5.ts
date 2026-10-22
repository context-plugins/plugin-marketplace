import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Fixed subscription amount in local currency. Required only for fixed amount subscriptions
 * depending on the payment method.
 */
export type Value5 = string;

export const value5Schema: Schema<Value5> = s.of<Value5>(s.union([s.string()]));
