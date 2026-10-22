import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Consumer email address for checkout flow optimization. */
export type EmailaddressModel = string;

export const emailaddressModelSchema: Schema<EmailaddressModel> = s.of<EmailaddressModel>(
  s.union([s.string()]),
);
