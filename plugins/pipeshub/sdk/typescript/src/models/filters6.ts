import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applied3Schema, type Applied3 } from "./applied3.js";
import { available3Schema, type Available3 } from "./available3.js";

/** Filters applied to this request and filters available for clients to use */
export type Filters6 = {
  applied?: Applied3;
  /** Describes filters supported by this endpoint and their current values */
  available?: Available3;
};

export const filters6Schema: Schema<Filters6> = s.object<Filters6>({
  applied: s.optional(s.lazy(() => applied3Schema)),
  available: s.optional(s.lazy(() => available3Schema)),
});
