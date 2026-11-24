import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { destination2Schema, type Destination2 } from "./destination2.js";
import { eventFilterSchema, type EventFilter } from "./event-filter.js";
import { retryPolicy2Schema, type RetryPolicy2 } from "./retry-policy2.js";
import { stateConditionSchema, type StateCondition } from "./state-condition.js";
import { transport2Schema, type Transport2 } from "./transport2.js";

/** A representation of the trigger resource. */
export type Trigger = {
  /**
   * Output only. Server-assigned unique identifier for the trigger. The value is a UUID4 string and
   * guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /**
   * Required. The resource name of the trigger. Must be unique within the location of the project
   * and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
   */
  name?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields, and
   * might be sent only on create requests to ensure that the client has an up-to-date value before
   * proceeding.
   */
  etag?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /**
   * Output only. Whether or not this Trigger satisfies the requirements of physical zone separation
   */
  satisfiesPzs?: boolean;
  /**
   * Optional. EventDataContentType specifies the type of payload in MIME format that is expected
   * from the CloudEvent data field. This is set to `application/json` if the value is not defined.
   */
  eventDataContentType?: string;
  /**
   * Optional. Unordered list. The list of filters that applies to event attributes. Only events
   * that match all the provided filters are sent to the destination.
   */
  eventFilters?: EventFilter[];
  /** Output only. The reason(s) why a trigger is in FAILED state. */
  conditions?: Record<string, StateCondition>;
  /**
   * Optional. The IAM service account email associated with the trigger. The service account
   * represents the identity of the trigger. The `iam.serviceAccounts.actAs` permission must be
   * granted on the service account to allow a principal to impersonate the service account. For
   * more information, see the [Roles and permissions](/eventarc/docs/all-roles-permissions) page
   * specific to the trigger destination.
   */
  serviceAccount?: string;
  /** Optional. User labels attached to the triggers that can be used to group resources. */
  labels?: Record<string, string>;
  /**
   * Optional. To deliver messages, Eventarc might use other Google Cloud products as a transport
   * intermediary. This field contains a reference to that transport intermediary. This information
   * can be used for debugging purposes.
   */
  transport?: Transport2;
  /**
   * Optional. The name of the channel associated with the trigger in
   * `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel
   * to receive events from Eventarc SaaS partners.
   */
  channel?: string;
  /** Required. Destination specifies where the events should be sent to. */
  destination?: Destination2;
  /**
   * Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for
   * up to 24 hours by default: https://cloud.google.com/eventarc/docs/retry-events
   */
  retryPolicy?: RetryPolicy2;
  /** Output only. The creation time. */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const triggerSchema: Schema<Trigger> = s.object<Trigger>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    etag: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    satisfiesPzs: s.optional(s.boolean()),
    eventDataContentType: s.optional(s.string()),
    eventFilters: s.optional(s.array(s.lazy(() => eventFilterSchema))),
    conditions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => stateConditionSchema),
      ),
    ),
    serviceAccount: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    transport: s.optional(s.lazy(() => transport2Schema)),
    channel: s.optional(s.string()),
    destination: s.optional(s.lazy(() => destination2Schema)),
    retryPolicy: s.optional(s.lazy(() => retryPolicy2Schema)),
    createTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
