import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Item = {
  label: string;
  count: number;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  label: s.string(),
  count: s.int(),
});
