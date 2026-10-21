import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Destination5 = {
  href: string;
};

export const destination5Schema: Schema<Destination5> = s.object<Destination5>({
  href: s.string(),
});
