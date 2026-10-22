import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Exchange1 = {
  href: string;
};

export const exchange1Schema: Schema<Exchange1> = s.object<Exchange1>({
  href: s.string(),
});
