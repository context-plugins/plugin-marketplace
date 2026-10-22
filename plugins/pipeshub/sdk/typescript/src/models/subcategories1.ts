import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Subcategories1 = {
  id: string;
  name: string;
};

export const subcategories1Schema: Schema<Subcategories1> = s.object<Subcategories1>({
  id: s.string(),
  name: s.string(),
});
