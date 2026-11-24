import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";

/** The response message for the `ListChannels` method. */
export type ListChannelsResponse = {
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** The requested channels, up to the number specified in `page_size`. */
  channels?: Channel[];
  /**
   * A page token that can be sent to `ListChannels` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listChannelsResponseSchema: Schema<ListChannelsResponse> = s.object<ListChannelsResponse>(
  {
    unreachable: s.optional(s.array(s.string())),
    channels: s.optional(s.array(s.lazy(() => channelSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
