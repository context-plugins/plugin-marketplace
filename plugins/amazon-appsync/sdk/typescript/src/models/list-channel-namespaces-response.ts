import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelNamespaceSchema, type ChannelNamespace } from "./channel-namespace.js";

export type ListChannelNamespacesResponse = {
  /** The ChannelNamespace objects. */
  channelNamespaces?: ChannelNamespace[];
  /**
   * An identifier that was returned from the previous call to this operation, which you can use to
   * return the next set of items in the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listChannelNamespacesResponseSchema: Schema<ListChannelNamespacesResponse> =
  s.object<ListChannelNamespacesResponse>(
    {
      channelNamespaces: s.optional(s.array(s.lazy(() => channelNamespaceSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
