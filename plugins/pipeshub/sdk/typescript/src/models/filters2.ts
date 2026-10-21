import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applied2Schema, type Applied2 } from "./applied2.js";
import { available2Schema, type Available2 } from "./available2.js";

/**
 * Filter introspection block. `applied` summarises the filters active on this request; `available`
 * catalogues every supported filter with its current value and whether it is applied.
 */
export type Filters2 = {
  applied: Applied2;
  available: Available2;
};

export const filters2Schema: Schema<Filters2> = s.object<Filters2>({
  applied: applied2Schema,
  available: available2Schema,
});
