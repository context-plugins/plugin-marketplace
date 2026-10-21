import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addenda2Schema, type Addenda2 } from "./addenda2.js";

export type Source2 = {
  addenda?: Addenda2;
};

export const source2Schema: Schema<Source2> = s.object<Source2>({
  addenda: s.optional(s.lazy(() => addenda2Schema)),
});
