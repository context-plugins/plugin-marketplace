import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The DisablePluginInstanceAction method's request. */
export type GoogleCloudApihubV1DisablePluginInstanceActionRequest = {
  /** Required. The action id to disable. */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1DisablePluginInstanceActionRequestSchema: Schema<GoogleCloudApihubV1DisablePluginInstanceActionRequest> =
  s.object<GoogleCloudApihubV1DisablePluginInstanceActionRequest>(
    {
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
