import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Customer2 = {
  /** Link to the Customer performing the action */
  href: string;
};

export const customer2Schema: Schema<Customer2> = s.object<Customer2>({
  href: s.string(),
});
