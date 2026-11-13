import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schema2Schema, type Schema2 } from "./schema2.js";

export type PostSearch = {
  schemas?: Schema2[];
  /** Filter expression for resources. */
  filter?: string;
  /** Field to sort by. */
  sortBy?: string;
  /** Order of sorting (ascending or descending). */
  sortOrder?: string;
  /**
   * A multi-valued list of strings indicating the names of resource attributes to return in the
   * response.
   */
  attributes?: string[];
  /**
   * A multi-valued list of strings indicating the names of resource attributes to be removed from
   * the default set of attributes to return.
   */
  excludedAttributes?: string[];
  /** The starting index for pagination. */
  startIndex?: number;
  /** The number of resources to retrieve. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postSearchSchema: Schema<PostSearch> = s.object<PostSearch>(
  {
    schemas: s.optional(s.array(s.lazy(() => schema2Schema))),
    filter: s.optional(s.string()),
    sortBy: s.optional(s.string()),
    sortOrder: s.optional(s.string()),
    attributes: s.optional(s.array(s.string())),
    excludedAttributes: s.optional(s.array(s.string())),
    startIndex: s.optional(s.int()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
