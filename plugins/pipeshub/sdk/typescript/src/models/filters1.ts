import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applied1Schema, type Applied1 } from "./applied1.js";
import { available1Schema, type Available1 } from "./available1.js";

export type Filters1 = {
  /** Echo of applied filters; unused slots are JSON `null`. */
  applied: Applied1;
  /** Populated when `include=availableFilters`; otherwise `null`. */
  available: Available1 | null;
};

export const filters1Schema: Schema<Filters1> = s.object<Filters1>({
  applied: applied1Schema,
  available: s.nullable(s.lazy(() => available1Schema)),
});
