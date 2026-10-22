import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aggregatedValidationCheckSchema,
  type AggregatedValidationCheck,
} from "./aggregated-validation-check.js";
import { validationCheckSchema, type ValidationCheck } from "./validation-check.js";

export type Validation = {
  validationChecks?: ValidationCheck[];
  aggregatedValidationChecks?: AggregatedValidationCheck[];
};

export const validationSchema: Schema<Validation> = s.object<Validation>({
  validationChecks: s.optional(s.array(s.lazy(() => validationCheckSchema))),
  aggregatedValidationChecks: s.optional(s.array(s.lazy(() => aggregatedValidationCheckSchema))),
});
