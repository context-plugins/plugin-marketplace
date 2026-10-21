import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { affirmOptionsSchema, type AffirmOptions } from "../affirm-options.js";

/** Custom options to be passed to the `affirm-affirm` connector. */
export type AffirmAffirm = AffirmOptions;

export const affirmAffirmSchema: Schema<AffirmAffirm> = s.of<AffirmAffirm>(
  s.union([s.lazy(() => affirmOptionsSchema)]),
);
