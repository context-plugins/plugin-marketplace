import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceResultSchema, type ResourceResult } from "./resource-result.js";

export type ResourceResultsResponse = {
  resourceResults: ResourceResult[];
  pageToken?: string;
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceResultsResponseSchema: Schema<ResourceResultsResponse> =
  s.object<ResourceResultsResponse>(
    {
      resourceResults: s.array(s.lazy(() => resourceResultSchema)),
      pageToken: s.optional(s.string()),
      rowCount: s.int(),
    },
    { additionalProperties: s.json() },
  );
