import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type Embedded12 = {
  errors: Error2[];
};

export const embedded12Schema: Schema<Embedded12> = s.object<Embedded12>({
  errors: s.array(s.lazy(() => error2Schema)),
});
