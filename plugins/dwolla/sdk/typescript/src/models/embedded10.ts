import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type Embedded10 = {
  errors: Error[];
};

export const embedded10Schema: Schema<Embedded10> = s.object<Embedded10>({
  errors: s.array(s.lazy(() => errorSchema)),
});
