import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The response message for the `ListMessageBusEnrollments` method.` */
export type ListMessageBusEnrollmentsResponse = {
  /** The requested enrollments, up to the number specified in `page_size`. */
  enrollments?: string[];
  /**
   * A page token that can be sent to `ListMessageBusEnrollments` to request the next page. If this
   * is empty, then there are no more pages.
   */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMessageBusEnrollmentsResponseSchema: Schema<ListMessageBusEnrollmentsResponse> =
  s.object<ListMessageBusEnrollmentsResponse>(
    {
      enrollments: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
      unreachable: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
