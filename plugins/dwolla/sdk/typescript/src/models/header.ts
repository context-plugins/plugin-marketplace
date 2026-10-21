import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Header = {
  name?: string;
  value?: string;
};

export const headerSchema: Schema<Header> = s.object<Header>({
  name: s.optional(s.string()),
  value: s.optional(s.string()),
});
