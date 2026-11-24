import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restriction3Schema, type Restriction3 } from "./restriction3.js";

/** Category restriction settings used in write operations */
export type CategoryRestrictionUpdate = {
  /** Action applied when the category is matched */
  restriction: Restriction3;
  /** Optional page identifier. Use with BLOCK and WARNING restrictions. */
  page?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryRestrictionUpdateSchema: Schema<CategoryRestrictionUpdate> =
  s.object<CategoryRestrictionUpdate>(
    {
      restriction: restriction3Schema,
      page: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
