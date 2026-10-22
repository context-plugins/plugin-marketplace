import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MassPayment1 = {
  href?: string;
};

export const massPayment1Schema: Schema<MassPayment1> = s.object<MassPayment1>({
  href: s.optional(s.string()),
});
