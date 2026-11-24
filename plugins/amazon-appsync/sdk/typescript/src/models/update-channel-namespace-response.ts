import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelNamespaceSchema, type ChannelNamespace } from "./channel-namespace.js";

export type UpdateChannelNamespaceResponse = {
  channelNamespace?: ChannelNamespace;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateChannelNamespaceResponseSchema: Schema<UpdateChannelNamespaceResponse> =
  s.object<UpdateChannelNamespaceResponse>(
    {
      channelNamespace: s.optional(s.lazy(() => channelNamespaceSchema)),
    },
    { additionalProperties: s.json() },
  );
