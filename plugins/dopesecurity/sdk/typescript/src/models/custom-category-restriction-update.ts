import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restriction4Schema, type Restriction4 } from "./restriction4.js";

/** Custom category restriction settings used in write operations */
export type CustomCategoryRestrictionUpdate = {
  /** Custom categories can be ignored, in addition to regular restrictions */
  restriction: Restriction4;
  /** Optional page identifier. Use with BLOCK and WARNING restrictions. */
  page?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customCategoryRestrictionUpdateSchema: Schema<CustomCategoryRestrictionUpdate> =
  s.object<CustomCategoryRestrictionUpdate>(
    {
      restriction: restriction4Schema,
      page: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
