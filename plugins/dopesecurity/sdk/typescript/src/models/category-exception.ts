import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restriction1Schema, type Restriction1 } from "./restriction1.js";
import { typeSchema, type Type } from "./type.js";

/** Per-entity override of a category restriction */
export type CategoryException = {
  /** The action applied for this entity */
  restriction: Restriction1;
  /** Optional block/warning page identifier */
  page?: string;
  /** Human-readable entity name (returned on read APIs) */
  name?: string;
  /** Entity type (returned on read APIs) */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryExceptionSchema: Schema<CategoryException> = s.object<CategoryException>(
  {
    restriction: restriction1Schema,
    page: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
  },
  { additionalProperties: s.json() },
);
