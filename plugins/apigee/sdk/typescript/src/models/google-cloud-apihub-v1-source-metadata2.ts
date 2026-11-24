import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1PluginInstanceActionSource2Schema,
  type GoogleCloudApihubV1PluginInstanceActionSource2,
} from "./google-cloud-apihub-v1-plugin-instance-action-source2.js";
import { sourceTypeSchema, type SourceType } from "./source-type.js";

/** Output only. The metadata of the source from which the observation was collected. */
export type GoogleCloudApihubV1SourceMetadata2 = {
  /** Output only. The unique identifier of the resource at the source. */
  originalResourceId?: string;
  /** Output only. The time at which the resource was created at the source. */
  originalResourceCreateTime?: string;
  /** Output only. The source of the resource is a plugin instance action. */
  pluginInstanceActionSource?: GoogleCloudApihubV1PluginInstanceActionSource2;
  /** Output only. The type of the source. */
  sourceType?: SourceType;
  /** Output only. The time at which the resource was last updated at the source. */
  originalResourceUpdateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SourceMetadata2Schema: Schema<GoogleCloudApihubV1SourceMetadata2> =
  s.object<GoogleCloudApihubV1SourceMetadata2>(
    {
      originalResourceId: s.optional(s.string()),
      originalResourceCreateTime: s.optional(s.string()),
      pluginInstanceActionSource: s.optional(
        s.lazy(() => googleCloudApihubV1PluginInstanceActionSource2Schema),
      ),
      sourceType: s.optional(s.lazy(() => sourceTypeSchema)),
      originalResourceUpdateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
