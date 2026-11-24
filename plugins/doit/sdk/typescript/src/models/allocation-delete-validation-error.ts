import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Details about why an allocation cannot be deleted. */
export type AllocationDeleteValidationError = {
  /** Allocation ID. */
  id?: string;
  /** Type of allocation. */
  type?: Type1;
  /** Error message explaining why deletion failed. */
  error?: string;
  /** Map of resources using this allocation, keyed by resource type. */
  resources?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationDeleteValidationErrorSchema: Schema<AllocationDeleteValidationError> =
  s.object<AllocationDeleteValidationError>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.lazy(() => type1Schema)),
      error: s.optional(s.string()),
      resources: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
