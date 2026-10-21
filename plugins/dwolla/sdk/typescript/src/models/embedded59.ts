import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error49Schema, type Error49 } from "./error49.js";

export type Embedded59 = {
  errors: Error49[];
};

export const embedded59Schema: Schema<Embedded59> = s.object<Embedded59>({
  errors: s.array(s.lazy(() => error49Schema)),
});
