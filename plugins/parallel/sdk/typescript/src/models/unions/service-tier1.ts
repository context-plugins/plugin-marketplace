import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { serviceTierSchema, type ServiceTier } from "../service-tier.js";

export type ServiceTier1 = ServiceTier;

export const serviceTier1Schema: Schema<ServiceTier1> = s.of<ServiceTier1>(
  s.union([s.lazy(() => serviceTierSchema)]),
);
