import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagResourceRequest = {
  /**
   * The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format
   * arn:partition:service:region:account-id:resource-type/resource-id. For example,
   * arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name. Valid
   * values for resource-type are: transcription-job, medical-transcription-job, vocabulary,
   * medical-vocabulary, vocabulary-filter, and language-model.
   */
  resourceArn: string;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the specified resource.
   * To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
   */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceRequestSchema: Schema<TagResourceRequest> = s.object<TagResourceRequest>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => tagSchema)),
    _keysMap: {
      resourceArn: "ResourceArn",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
