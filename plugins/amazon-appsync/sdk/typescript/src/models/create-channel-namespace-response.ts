import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelNamespaceSchema, type ChannelNamespace } from "./channel-namespace.js";

export type CreateChannelNamespaceResponse = {
  channelNamespace?: ChannelNamespace;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createChannelNamespaceResponseSchema: Schema<CreateChannelNamespaceResponse> =
  s.object<CreateChannelNamespaceResponse>(
    {
      channelNamespace: s.optional(s.lazy(() => channelNamespaceSchema)),
    },
    { additionalProperties: s.json() },
  );
