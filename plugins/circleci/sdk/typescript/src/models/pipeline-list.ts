import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pipelineCircleCiRestApiV2PipelineApiInternalSchema,
  pipelineCircleCiRestApiV2PipelineApiSchema,
  type PipelineCircleCiRestApiV2PipelineApi,
} from "./pipeline-circle-ci-rest-api-v2-pipeline-api.js";

export type PipelineList = {
  /** List of pipelines */
  items?: PipelineCircleCiRestApiV2PipelineApi[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pipelineListProperties: s.Shape<PipelineList> = {
  items: s.optional(s.array(s.lazy(() => pipelineCircleCiRestApiV2PipelineApiInternalSchema))),
  nextPageToken: s.optional(s.string()),
  _keysMap: {
    nextPageToken: "next_page_token",
  },
};

export const pipelineListInternalSchema: Schema<PipelineList> = s.object<PipelineList>(
  pipelineListProperties,
  { additionalProperties: s.json() },
);

export const pipelineListSchema: Schema<PipelineList> = s.lazySchema(() =>
  s.object<PipelineList>(
    {
      ...pipelineListProperties,
      items: s.optional(s.array(s.lazy(() => pipelineCircleCiRestApiV2PipelineApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
