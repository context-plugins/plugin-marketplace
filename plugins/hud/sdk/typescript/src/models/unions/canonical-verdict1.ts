import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { canonicalVerdictSchema, type CanonicalVerdict } from "../canonical-verdict.js";

export type CanonicalVerdict1 = CanonicalVerdict;

export const canonicalVerdict1Schema: Schema<CanonicalVerdict1> = s.of<CanonicalVerdict1>(
  s.union([s.lazy(() => canonicalVerdictSchema)]),
);
