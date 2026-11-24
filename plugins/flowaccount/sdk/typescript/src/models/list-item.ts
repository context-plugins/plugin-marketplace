import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListItem = {
  text?: string | null;
  value?: string | null;
};

export const listItemSchema: Schema<ListItem> = s.object<ListItem>({
  text: s.optionalNullable(s.string()),
  value: s.optionalNullable(s.string()),
});
