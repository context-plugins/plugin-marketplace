import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchRestrictions = {
  /** Specifies the maximum number of builds allowed. */
  maximumBuildsAllowed?: number;
  /**
   * An array of strings that specify the compute types that are allowed for the batch build. See
   * Build environment compute types in the CodeBuild User Guide for these values.
   */
  computeTypesAllowed?: string[];
  /**
   * An array of strings that specify the fleets that are allowed for the batch build. See Run
   * builds on reserved capacity fleets in the CodeBuild User Guide for more information.
   */
  fleetsAllowed?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRestrictionsSchema: Schema<BatchRestrictions> = s.object<BatchRestrictions>(
  {
    maximumBuildsAllowed: s.optional(s.int()),
    computeTypesAllowed: s.optional(s.array(s.string())),
    fleetsAllowed: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
