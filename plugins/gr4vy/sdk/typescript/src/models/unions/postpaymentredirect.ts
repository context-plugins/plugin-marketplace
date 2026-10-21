import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the transaction should redirect post-payment */
export type Postpaymentredirect = boolean;

export const postpaymentredirectSchema: Schema<Postpaymentredirect> = s.of<Postpaymentredirect>(
  s.union([s.boolean()]),
);
