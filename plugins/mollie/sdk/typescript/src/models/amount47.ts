import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount of the route. That amount that will be routed to the specified destination. */
export type Amount47 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount47Schema: Schema<Amount47> = s.object<Amount47>({
  currency: s.string(),
  value: s.string(),
});
