import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type6DoiTReportsApiSchema, type Type6DoiTReportsApi } from "./type6-doi-treports-api.js";

/**
 * The field to count distinct values of. Only applicable when aggregation is set to "count". On
 * PATCH, omit to preserve the existing field; send null to remove it. A PATCH that sets
 * `aggregation` to a value other than "count" without sending `count` removes it.
 */
export type Count = {
  /** The field identifier to count distinct values of. */
  id: string;
  /** The metadata field type. */
  type: Type6DoiTReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countSchema: Schema<Count> = s.object<Count>(
  {
    id: s.string(),
    type: type6DoiTReportsApiSchema,
  },
  { additionalProperties: s.json() },
);
