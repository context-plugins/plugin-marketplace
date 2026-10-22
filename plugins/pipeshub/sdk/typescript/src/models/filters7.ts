import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applied4Schema, type Applied4 } from "./applied4.js";
import { available4Schema, type Available4 } from "./available4.js";

/**
 * Summary of which filter/sort/pagination parameters were applied to this request, plus the catalog
 * of options available on this endpoint.
 */
export type Filters7 = {
  applied?: Applied4;
  available?: Available4;
};

export const filters7Schema: Schema<Filters7> = s.object<Filters7>({
  applied: s.optional(s.lazy(() => applied4Schema)),
  available: s.optional(s.lazy(() => available4Schema)),
});
