import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the use came to the register: built in-house, a supplier's AI, a feature in a service, a
 * proof of concept, or found in use
 */
export const EntryType = {
  InternalBuild: "internal_build",
  SupplierAi: "supplier_ai",
  FeatureInService: "feature_in_service",
  ProofOfConcept: "proof_of_concept",
  Discovered: "discovered",
} as const;
export type EntryType = (typeof EntryType)[keyof typeof EntryType] | (string & {});

export const entryTypeSchema: EnumSchema<EntryType> = s.enumOf<EntryType>(EntryType);
