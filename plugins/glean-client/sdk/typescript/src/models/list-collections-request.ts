import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ListCollectionsRequest = {
  /**
   * Case-insensitive substring search on collection names. Leading and trailing whitespace is
   * ignored. An empty query does not filter collections.
   */
  query?: string;
  /** Whether to include the audience filters with the listed Collections. */
  includeAudience?: boolean;
  /** Whether to include the editor roles with the listed Collections. */
  includeRoles?: boolean;
  /**
   * The datasource type this Collection can hold. ANSWERS - for Collections representing answer
   * boards
   */
  allowedDatasource?: string;
};

export const listCollectionsRequestSchema: Schema<ListCollectionsRequest> = s.object<ListCollectionsRequest>({
  query: s.optional(s.string()),
  includeAudience: s.optional(s.boolean()),
  includeRoles: s.optional(s.boolean()),
  allowedDatasource: s.optional(s.string()),
});
