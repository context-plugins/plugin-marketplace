import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelConnectionSchema, type ChannelConnection } from "./channel-connection.js";

/** The response message for the `ListChannelConnections` method. */
export type ListChannelConnectionsResponse = {
  /**
   * A page token that can be sent to `ListChannelConnections` to request the next page. If this is
   * empty, then there are no more pages.
   */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** The requested channel connections, up to the number specified in `page_size`. */
  channelConnections?: ChannelConnection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listChannelConnectionsResponseSchema: Schema<ListChannelConnectionsResponse> =
  s.object<ListChannelConnectionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      unreachable: s.optional(s.array(s.string())),
      channelConnections: s.optional(s.array(s.lazy(() => channelConnectionSchema))),
    },
    { additionalProperties: s.json() },
  );
