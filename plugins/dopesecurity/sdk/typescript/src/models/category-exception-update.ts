import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restriction5Schema, type Restriction5 } from "./restriction5.js";

/** Exception settings used in write operations */
export type CategoryExceptionUpdate = {
  /** The action applied for this user or group */
  restriction: Restriction5;
  /** Optional page identifier. Use with BLOCK and WARNING restrictions. */
  page?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryExceptionUpdateSchema: Schema<CategoryExceptionUpdate> =
  s.object<CategoryExceptionUpdate>(
    {
      restriction: restriction5Schema,
      page: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
