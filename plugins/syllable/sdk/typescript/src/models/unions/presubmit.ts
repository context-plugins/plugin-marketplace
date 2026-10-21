import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { presubmit1Schema, type Presubmit1 } from "./presubmit1.js";

/**
 * Actions to execute before validation (data-mutation only: set, inc, save). Use this to set
 * default values for required fields that would otherwise fail validation.
 */
export type Presubmit = Presubmit1[];

export const presubmitSchema: Schema<Presubmit> = s.of<Presubmit>(
  s.union([s.array(s.lazy(() => presubmit1Schema))]),
);
