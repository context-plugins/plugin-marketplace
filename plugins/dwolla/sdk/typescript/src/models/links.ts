import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchange4Schema, type Exchange4 } from "./exchange4.js";

export type Links = {
  exchange?: Exchange4;
};

export const linksSchema: Schema<Links> = s.object<Links>({
  exchange: s.optional(s.lazy(() => exchange4Schema)),
});
