import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category = {
  id: string;
  name: string;
};

export const categorySchema: Schema<Category> = s.object<Category>({
  id: s.string(),
  name: s.string(),
});
