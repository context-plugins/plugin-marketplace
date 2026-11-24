import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceRequest = {
  /**
   * Returns a list of all tags associated with the specified Amazon Resource Name (ARN). ARNs have
   * the format arn:partition:service:region:account-id:resource-type/resource-id. For example,
   * arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid
   * values for resource-type are: transcription-job, medical-transcription-job, vocabulary,
   * medical-vocabulary, vocabulary-filter, and language-model.
   */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceRequestSchema: Schema<ListTagsForResourceRequest> =
  s.object<ListTagsForResourceRequest>(
    {
      resourceArn: s.string(),
      _keysMap: {
        resourceArn: "ResourceArn",
      },
    },
    { additionalProperties: s.json() },
  );
