import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudEventarcV1PipelineMediationTransformation2Schema,
  type GoogleCloudEventarcV1PipelineMediationTransformation2,
} from "./google-cloud-eventarc-v1-pipeline-mediation-transformation2.js";

/** Mediation defines different ways to modify the Pipeline. */
export type GoogleCloudEventarcV1PipelineMediation = {
  /** Optional. How the Pipeline is to transform messages */
  transformation?: GoogleCloudEventarcV1PipelineMediationTransformation2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineMediationSchema: Schema<GoogleCloudEventarcV1PipelineMediation> =
  s.object<GoogleCloudEventarcV1PipelineMediation>(
    {
      transformation: s.optional(s.lazy(() => googleCloudEventarcV1PipelineMediationTransformation2Schema)),
    },
    { additionalProperties: s.json() },
  );
