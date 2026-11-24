import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";

export type SourcesResponse = {
  data: Source[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourcesResponseSchema: Schema<SourcesResponse> = s.object<SourcesResponse>(
  {
    data: s.array(s.lazy(() => sourceSchema)),
  },
  { additionalProperties: s.json() },
);
