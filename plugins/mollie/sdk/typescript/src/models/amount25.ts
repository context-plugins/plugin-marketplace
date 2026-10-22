import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount that will be pulled back. */
export type Amount25 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount25Schema: Schema<Amount25> = s.object<Amount25>({
  currency: s.string(),
  value: s.string(),
});
