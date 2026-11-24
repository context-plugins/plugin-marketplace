import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The EnablePluginInstanceAction method's request. */
export type GoogleCloudApihubV1EnablePluginInstanceActionRequest = {
  /** Required. The action id to enable. */
  actionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1EnablePluginInstanceActionRequestSchema: Schema<GoogleCloudApihubV1EnablePluginInstanceActionRequest> =
  s.object<GoogleCloudApihubV1EnablePluginInstanceActionRequest>(
    {
      actionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
