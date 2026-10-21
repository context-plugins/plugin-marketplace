import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type School1 = {
  href: string;
  sourcedId: string;
  type: string;
};

export const school1Schema: Schema<School1> = s.object<School1>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
