import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The URL to the generic Mollie API error handling guide. */
export type Documentation = {
  href: string;
  type: string;
};

export const documentationSchema: Schema<Documentation> = s.object<Documentation>({
  href: s.string(),
  type: s.string(),
});
