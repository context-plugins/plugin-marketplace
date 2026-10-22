import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Category1 = {
  sourcedId: string;
};

export const category1Schema: Schema<Category1> = s.object<Category1>({
  sourcedId: s.string(),
});
