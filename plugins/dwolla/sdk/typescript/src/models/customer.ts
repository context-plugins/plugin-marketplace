import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customer = {
  /** URL of the Sandbox customer to attach the simulated directive to. */
  href: string;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  href: s.string(),
});
