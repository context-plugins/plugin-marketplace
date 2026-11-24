import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { loggingConfig4Schema, type LoggingConfig4 } from "./logging-config4.js";
import {
  organizationSubscription2Schema,
  type OrganizationSubscription2,
} from "./organization-subscription2.js";
import { projectSubscriptions2Schema, type ProjectSubscriptions2 } from "./project-subscriptions2.js";

/**
 * Represents a subscription to first-party events for a MessageBus resource. A GoogleApiSource
 * resource lets you configure the delivery of events from Google API sources to a designated bus.
 */
export type GoogleApiSource = {
  /** Optional. Config to control Platform logging for the GoogleApiSource. */
  loggingConfig?: LoggingConfig4;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /**
   * Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and
   * guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /**
   * Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their
   * event data. It must match the pattern
   * `projects/*&#47;locations/*&#47;keyRings/*&#47;cryptoKeys/*`.
   */
  cryptoKeyName?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /**
   * Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's
   * org.
   */
  organizationSubscription?: OrganizationSubscription2;
  /**
   * Identifier. Resource name of the form
   * projects/{project}/locations/{location}/googleApiSources/{google_api_source}
   */
  name?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields, and
   * might be sent only on update and delete requests to ensure that the client has an up-to-date
   * value before proceeding.
   */
  etag?: string;
  /**
   * Optional. Config to enable subscribing to all events from a list of projects. All the projects
   * must be in the same org as the GoogleApiSource.
   */
  projectSubscriptions?: ProjectSubscriptions2;
  /**
   * Required. Destination is the message bus that the GoogleApiSource is delivering to. It must be
   * point to the full resource name of a MessageBus. Format:
   * "projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)
   */
  destination?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleApiSourceSchema: Schema<GoogleApiSource> = s.object<GoogleApiSource>(
  {
    loggingConfig: s.optional(s.lazy(() => loggingConfig4Schema)),
    annotations: s.optional(s.record(s.string(), s.string())),
    uid: s.optional(s.string()),
    createTime: s.optional(s.string()),
    cryptoKeyName: s.optional(s.string()),
    displayName: s.optional(s.string()),
    organizationSubscription: s.optional(s.lazy(() => organizationSubscription2Schema)),
    name: s.optional(s.string()),
    etag: s.optional(s.string()),
    projectSubscriptions: s.optional(s.lazy(() => projectSubscriptions2Schema)),
    destination: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
