import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1PluginSchema,
  type GoogleCloudApihubV1Plugin,
} from "./google-cloud-apihub-v1-plugin.js";

/** The ListPlugins method's response. */
export type GoogleCloudApihubV1ListPluginsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The plugins from the specified parent resource. */
  plugins?: GoogleCloudApihubV1Plugin[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListPluginsResponseSchema: Schema<GoogleCloudApihubV1ListPluginsResponse> =
  s.object<GoogleCloudApihubV1ListPluginsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      plugins: s.optional(s.array(s.lazy(() => googleCloudApihubV1PluginSchema))),
    },
    { additionalProperties: s.json() },
  );
