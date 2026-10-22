import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Course1 = {
  href: string;
  sourcedId: string;
  type: string;
};

export const course1Schema: Schema<Course1> = s.object<Course1>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
