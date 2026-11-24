import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/**
 * Represents a subscriber's intent to receive events from an event provider. Published events are
 * delivered using the transport associated with the Channel resource. A channel is associated with
 * exactly one event provider.
 */
export type Channel = {
  /** Output only. The last-modified time. */
  updateTime?: string;
  /**
   * Required. The resource name of the channel. Must be unique within the location on the project
   * and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format.
   */
  name?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /**
   * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their
   * event data. It must match the pattern
   * `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`.
   */
  cryptoKeyName?: string;
  /**
   * Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and
   * guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /**
   * Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a
   * transport for the event delivery. Format: `projects/{project}/topics/{topic_id}`.
   */
  pubsubTopic?: string;
  /**
   * Output only. Whether or not this Channel satisfies the requirements of physical zone separation
   */
  satisfiesPzs?: boolean;
  /** Output only. The state of a Channel. */
  state?: State;
  /**
   * Output only. The activation token for the channel. The token must be used by the provider to
   * register the channel for publishing.
   */
  activationToken?: string;
  /**
   * The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This
   * provider will be granted permissions to publish events to the channel. Format:
   * `projects/{project}/locations/{location}/providers/{provider_id}`.
   */
  provider?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelSchema: Schema<Channel> = s.object<Channel>(
  {
    updateTime: s.optional(s.string()),
    name: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    cryptoKeyName: s.optional(s.string()),
    uid: s.optional(s.string()),
    pubsubTopic: s.optional(s.string()),
    satisfiesPzs: s.optional(s.boolean()),
    state: s.optional(s.lazy(() => stateSchema)),
    activationToken: s.optional(s.string()),
    provider: s.optional(s.string()),
    createTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
