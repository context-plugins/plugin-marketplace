import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1SpecContents1Schema,
  type GoogleCloudApihubV1SpecContents1,
} from "./google-cloud-apihub-v1-spec-contents1.js";
import { specContentTypeSchema, type SpecContentType } from "./spec-content-type.js";

/**
 * The additional spec content for the spec. This contains the metadata and the last update time for
 * the additional spec content.
 */
export type GoogleCloudApihubV1AdditionalSpecContent = {
  /** Optional. The labels of the spec content e.g. specboost addon version. */
  labels?: Record<string, string>;
  /** Optional. The additional spec contents. */
  specContents?: GoogleCloudApihubV1SpecContents1;
  /** Required. The type of the spec content. */
  specContentType?: SpecContentType;
  /** Output only. The time at which the spec content was last updated. */
  updateTime?: string;
  /** Output only. The time at which the spec content was created. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AdditionalSpecContentSchema: Schema<GoogleCloudApihubV1AdditionalSpecContent> =
  s.object<GoogleCloudApihubV1AdditionalSpecContent>(
    {
      labels: s.optional(s.record(s.string(), s.string())),
      specContents: s.optional(s.lazy(() => googleCloudApihubV1SpecContents1Schema)),
      specContentType: s.optional(s.lazy(() => specContentTypeSchema)),
      updateTime: s.optional(s.string()),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
