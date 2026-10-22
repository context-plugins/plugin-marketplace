import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HeaderItems = {
  name?: string;
  value?: string;
};

export const headerItemsSchema: Schema<HeaderItems> = s.object<HeaderItems>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
