import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceBoomiDataHubSourcesApiSchema,
  type SourceBoomiDataHubSourcesApi,
} from "./source-boomi-data-hub-sources-api.js";

export type RepositoriesSourcesResponse = {
  sources?: SourceBoomiDataHubSourcesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoriesSourcesResponseSchema: Schema<RepositoriesSourcesResponse> =
  s.object<RepositoriesSourcesResponse>(
    {
      sources: s.optional(s.array(s.lazy(() => sourceBoomiDataHubSourcesApiSchema))),
    },
    { additionalProperties: s.json() },
  );
