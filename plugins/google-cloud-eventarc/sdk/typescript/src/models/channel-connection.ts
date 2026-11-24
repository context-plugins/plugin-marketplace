import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A representation of the ChannelConnection resource. A ChannelConnection is a resource which event
 * providers create during the activation process to establish a connection between the provider and
 * the subscriber channel.
 */
export type ChannelConnection = {
  /**
   * Output only. Server assigned ID of the resource. The server guarantees uniqueness and
   * immutability until deleted.
   */
  uid?: string;
  /**
   * Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross
   * project and cross accounts references. This must be in
   * `projects/{project}/location/{location}/channels/{channel_id}` format.
   */
  channel?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /**
   * Input only. Activation token for the channel. The token will be used during the creation of
   * ChannelConnection to bind the channel with the provider project. This field will not be stored
   * in the provider resource.
   */
  activationToken?: string;
  /** Required. The name of the connection. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelConnectionSchema: Schema<ChannelConnection> = s.object<ChannelConnection>(
  {
    uid: s.optional(s.string()),
    channel: s.optional(s.string()),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    activationToken: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
