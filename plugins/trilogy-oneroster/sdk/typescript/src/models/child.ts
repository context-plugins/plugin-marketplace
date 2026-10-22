import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Child = {
  href: string;
  sourcedId: string;
  type: string;
};

export const childSchema: Schema<Child> = s.object<Child>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
