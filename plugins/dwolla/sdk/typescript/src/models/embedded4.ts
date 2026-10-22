import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customers11Schema, type Customers11 } from "./unions/customers11.js";

export type Embedded4 = {
  customers?: Customers11[];
};

export const embedded4Schema: Schema<Embedded4> = s.object<Embedded4>({
  customers: s.optional(s.array(s.lazy(() => customers11Schema))),
});
