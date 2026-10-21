import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { displayCtaMappingSchema, type DisplayCtaMapping } from "../display-cta-mapping.js";

export type Cta = DisplayCtaMapping;

export const ctaSchema: Schema<Cta> = s.of<Cta>(s.union([s.lazy(() => displayCtaMappingSchema)]));
