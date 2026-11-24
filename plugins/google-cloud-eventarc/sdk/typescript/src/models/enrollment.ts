import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An enrollment represents a subscription for messages on a particular message bus. It defines a
 * matching criteria for messages on the bus and the subscriber endpoint where matched messages
 * should be delivered.
 */
export type Enrollment = {
  /**
   * Identifier. Resource name of the form
   * projects/{project}/locations/{location}/enrollments/{enrollment}
   */
  name?: string;
  /**
   * Output only. This checksum is computed by the server based on the value of other fields, and
   * might be sent only on update and delete requests to ensure that the client has an up-to-date
   * value before proceeding.
   */
  etag?: string;
  /** Output only. The creation time. */
  createTime?: string;
  /**
   * Required. Immutable. Resource name of the message bus identifying the source of the messages.
   * It matches the form projects/{project}/locations/{location}/messageBuses/{messageBus}.
   */
  messageBus?: string;
  /**
   * Required. Destination is the Pipeline that the Enrollment is delivering to. It must point to
   * the full resource name of a Pipeline. Format:
   * "projects/{PROJECT_ID}/locations/{region}/pipelines/{PIPELINE_ID)"
   */
  destination?: string;
  /** Optional. Resource labels. */
  labels?: Record<string, string>;
  /**
   * Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and
   * guaranteed to remain unchanged until the resource is deleted.
   */
  uid?: string;
  /** Required. A CEL expression identifying which messages this enrollment applies to. */
  celMatch?: string;
  /** Output only. The last-modified time. */
  updateTime?: string;
  /** Optional. Resource display name. */
  displayName?: string;
  /** Optional. Resource annotations. */
  annotations?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrollmentSchema: Schema<Enrollment> = s.object<Enrollment>(
  {
    name: s.optional(s.string()),
    etag: s.optional(s.string()),
    createTime: s.optional(s.string()),
    messageBus: s.optional(s.string()),
    destination: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    uid: s.optional(s.string()),
    celMatch: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    annotations: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
