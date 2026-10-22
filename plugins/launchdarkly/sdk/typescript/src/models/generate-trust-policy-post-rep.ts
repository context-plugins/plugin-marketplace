import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { trustPolicyDetailsSchema, type TrustPolicyDetails } from "./trust-policy-details.js";

export type GenerateTrustPolicyPostRep = {
  awsTrustPolicy?: TrustPolicyDetails;
};

export const generateTrustPolicyPostRepSchema: Schema<GenerateTrustPolicyPostRep> =
  s.object<GenerateTrustPolicyPostRep>({
    awsTrustPolicy: s.optional(s.lazy(() => trustPolicyDetailsSchema)),
  });
