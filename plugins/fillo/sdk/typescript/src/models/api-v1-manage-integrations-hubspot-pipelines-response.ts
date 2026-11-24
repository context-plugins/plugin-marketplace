import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pipelineSchema, type Pipeline } from "./pipeline.js";

export type ApiV1ManageIntegrationsHubspotPipelinesResponse = {
  pipelines: Pipeline[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageIntegrationsHubspotPipelinesResponseSchema: Schema<ApiV1ManageIntegrationsHubspotPipelinesResponse> =
  s.object<ApiV1ManageIntegrationsHubspotPipelinesResponse>(
    {
      pipelines: s.array(s.lazy(() => pipelineSchema)),
    },
    { additionalProperties: s.json() },
  );
