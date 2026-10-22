import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Class5 = {
  href: string;
  sourcedId: string;
  type: string;
};

export const class5Schema: Schema<Class5> = s.object<Class5>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
