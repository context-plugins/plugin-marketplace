import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type Embedded15 = {
  errors?: Error5[];
};

export const embedded15Schema: Schema<Embedded15> = s.object<Embedded15>({
  errors: s.optional(s.array(s.lazy(() => error5Schema))),
});
