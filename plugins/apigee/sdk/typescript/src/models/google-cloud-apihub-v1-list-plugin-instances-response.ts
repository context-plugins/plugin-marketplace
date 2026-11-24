import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1PluginInstanceSchema,
  type GoogleCloudApihubV1PluginInstance,
} from "./google-cloud-apihub-v1-plugin-instance.js";

/** The ListPluginInstances method's response. */
export type GoogleCloudApihubV1ListPluginInstancesResponse = {
  /** The plugin instances from the specified parent resource. */
  pluginInstances?: GoogleCloudApihubV1PluginInstance[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListPluginInstancesResponseSchema: Schema<GoogleCloudApihubV1ListPluginInstancesResponse> =
  s.object<GoogleCloudApihubV1ListPluginInstancesResponse>(
    {
      pluginInstances: s.optional(s.array(s.lazy(() => googleCloudApihubV1PluginInstanceSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
