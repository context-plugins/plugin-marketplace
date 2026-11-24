import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectModelSchema, type ObjectModel } from "./object-model.js";

export type ObjectListResponse = {
  objects: ObjectModel[];
  /** Total number of Objects matching the query, ignoring `limit` and `skip`. */
  total?: number;
  /** The `limit` applied to this response. */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const objectListResponseSchema: Schema<ObjectListResponse> = s.object<ObjectListResponse>(
  {
    objects: s.array(s.lazy(() => objectModelSchema)),
    total: s.optional(s.int()),
    limit: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
