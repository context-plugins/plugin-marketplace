import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addenda2Schema, type Addenda2 } from "./addenda2.js";

export type Destination7 = {
  addenda?: Addenda2;
};

export const destination7Schema: Schema<Destination7> = s.object<Destination7>({
  addenda: s.optional(s.lazy(() => addenda2Schema)),
});
