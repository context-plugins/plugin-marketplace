import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Addenda2 = {
  values?: string[];
};

export const addenda2Schema: Schema<Addenda2> = s.object<Addenda2>({
  values: s.optional(s.array(s.string())),
});
