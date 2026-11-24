import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UntagResourceRequest = {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove tags from.
   * ARNs have the format arn:partition:service:region:account-id:resource-type/resource-id. For
   * example, arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name.
   * Valid values for resource-type are: transcription-job, medical-transcription-job, vocabulary,
   * medical-vocabulary, vocabulary-filter, and language-model.
   */
  resourceArn: string;
  /** Removes the specified tag keys from the specified Amazon Transcribe resource. */
  tagKeys: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const untagResourceRequestSchema: Schema<UntagResourceRequest> = s.object<UntagResourceRequest>(
  {
    resourceArn: s.string(),
    tagKeys: s.array(s.string()),
    _keysMap: {
      resourceArn: "ResourceArn",
      tagKeys: "TagKeys",
    },
  },
  { additionalProperties: s.json() },
);
