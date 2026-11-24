import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The information related to the service implemented by the plugin developer, used to invoke the
 * plugin's functionality.
 */
export type GoogleCloudApihubV1HostingService = {
  /**
   * Optional. The URI of the service implemented by the plugin developer, used to invoke the
   * plugin's functionality. This information is only required for user defined plugins.
   */
  serviceUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1HostingServiceSchema: Schema<GoogleCloudApihubV1HostingService> =
  s.object<GoogleCloudApihubV1HostingService>(
    {
      serviceUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
