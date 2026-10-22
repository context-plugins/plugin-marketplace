import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Term = {
  href: string;
  sourcedId: string;
  type: string;
};

export const termSchema: Schema<Term> = s.object<Term>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
