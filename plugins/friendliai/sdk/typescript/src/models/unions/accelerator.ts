import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { acceleratorRequirementSchema, type AcceleratorRequirement } from "../accelerator-requirement.js";

/** Specifies the instance type for the endpoint. */
export type Accelerator = AcceleratorRequirement;

export const acceleratorSchema: Schema<Accelerator> = s.of<Accelerator>(
  s.union([s.lazy(() => acceleratorRequirementSchema)]),
);
