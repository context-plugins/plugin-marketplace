import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedRuntimeLimitsInternalSchema,
  submittedRuntimeLimitsSchema,
  type SubmittedRuntimeLimits,
} from "../submitted-runtime-limits.js";

export type Limits = SubmittedRuntimeLimits;

export const limitsInternalSchema: Schema<Limits> = s.of<Limits>(
  s.union([s.lazy(() => submittedRuntimeLimitsInternalSchema)]),
);

export const limitsSchema: Schema<Limits> = s.lazySchema(() =>
  s.of<Limits>(s.union([s.lazy(() => submittedRuntimeLimitsSchema)])),
);
