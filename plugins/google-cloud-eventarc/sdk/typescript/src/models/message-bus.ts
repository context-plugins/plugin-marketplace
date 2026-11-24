import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig3Schema, type LoggingConfig3 } from "./logging-config3.js";

/**
 * MessageBus for the messages flowing through the system. The admin has visibility and control over
 * the messages being published and consumed and can restrict publishers and subscribers to only a
 * subset of data available in the system by defining authorization policies.
 */
export type MessageBus = {
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /**
   * Identifier. Resource name of the form
   * projects/{project}/locations/{location}/messageBuses/{message_bus}
   */
  name?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields, and
   * might be sent only on update and delete requests to ensure that the client has an up-to-date
   * value before proceeding.
   */
  etag?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /**
   * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their
   * event data. It must match the pattern
   * `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`.
   */
  cryptoKeyName?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /**
   * Optional. Config to control Platform logging for the Message Bus. This log configuration is
   * applied to the Message Bus itself, and all the Enrollments attached to it.
   */
  loggingConfig?: LoggingConfig3;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /**
   * Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and
   * guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageBusSchema: Schema<MessageBus> = s.object<MessageBus>(
  {
    labels: s.optional(s.record(s.string(), s.string())),
    name: s.optional(s.string()),
    etag: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    cryptoKeyName: s.optional(s.string()),
    displayName: s.optional(s.string()),
    createTime: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig3Schema)),
    annotations: s.optional(s.record(s.string(), s.string())),
    uid: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
