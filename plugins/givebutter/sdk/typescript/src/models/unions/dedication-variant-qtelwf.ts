import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dedicationResourceSchema, type DedicationResource } from "../dedication-resource.js";

export type DedicationVariantQtelwf = DedicationResource;

export const dedicationVariantQtelwfSchema: Schema<DedicationVariantQtelwf> = s.of<DedicationVariantQtelwf>(
  s.union([s.lazy(() => dedicationResourceSchema)]),
);
