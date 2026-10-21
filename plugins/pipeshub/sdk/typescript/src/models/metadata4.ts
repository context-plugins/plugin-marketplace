import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error24Schema, type Error24 } from "./error24.js";

/** Per-field validation detail from Zod. */
export type Metadata4 = {
  errors: Error24[];
};

export const metadata4Schema: Schema<Metadata4> = s.object<Metadata4>({
  errors: s.array(s.lazy(() => error24Schema)),
});
