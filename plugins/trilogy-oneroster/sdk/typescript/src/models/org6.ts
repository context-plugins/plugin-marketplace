import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Org6 = {
  href: string;
  sourcedId: string;
  type: string;
};

export const org6Schema: Schema<Org6> = s.object<Org6>({
  href: s.string(),
  sourcedId: s.string(),
  type: s.string(),
});
