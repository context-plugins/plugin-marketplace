import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  optionalValidationInfos1Schema,
  type OptionalValidationInfos1,
} from "./optional-validation-infos1.js";

export type DocumentValidationResponse = {
  id?: string;
  valid?: boolean;
  /** Number of signatures found */
  signatures?: number;
  /** Number of valid signatures found */
  validSignatures?: number;
  /** Highest signature quality found */
  quality?: string;
  /** Identified legislation (CH, EU, CH-EU, WORLD) */
  legislation?: string;
  /** All signatures are provided with long-term validation information */
  longTermValidation?: boolean;
  /** Indicates if visual differences were detected */
  visualDifferences?: boolean;
  /** Indicates if undefined changes were detected */
  undefinedChanges?: boolean;
  /** (Optional) Additional information details */
  additionalInfos?: OptionalValidationInfos1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentValidationResponseSchema: Schema<DocumentValidationResponse> =
  s.object<DocumentValidationResponse>(
    {
      id: s.optional(s.string()),
      valid: s.optional(s.boolean()),
      signatures: s.optional(s.int()),
      validSignatures: s.optional(s.int()),
      quality: s.optional(s.string()),
      legislation: s.optional(s.string()),
      longTermValidation: s.optional(s.boolean()),
      visualDifferences: s.optional(s.boolean()),
      undefinedChanges: s.optional(s.boolean()),
      additionalInfos: s.optional(s.lazy(() => optionalValidationInfos1Schema)),
    },
    { additionalProperties: s.json() },
  );
