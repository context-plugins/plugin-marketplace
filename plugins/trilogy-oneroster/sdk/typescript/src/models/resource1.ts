import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Resource1 = {
  href: string;
  sourcedId: string;
  type: string;
};

export const resource1Schema: Schema<Resource1> = s.object<Resource1>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
