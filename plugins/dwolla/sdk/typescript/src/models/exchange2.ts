import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchange2 = {
  /** URL of the Exchange resource created with a card token */
  href: string;
};

export const exchange2Schema: Schema<Exchange2> = s.object<Exchange2>({
  href: s.string(),
});
