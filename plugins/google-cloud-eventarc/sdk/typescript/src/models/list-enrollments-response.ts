import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrollmentSchema, type Enrollment } from "./enrollment.js";

/** The response message for the `ListEnrollments` method. */
export type ListEnrollmentsResponse = {
  /** The requested Enrollments, up to the number specified in `page_size`. */
  enrollments?: Enrollment[];
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /**
   * A page token that can be sent to `ListEnrollments` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEnrollmentsResponseSchema: Schema<ListEnrollmentsResponse> =
  s.object<ListEnrollmentsResponse>(
    {
      enrollments: s.optional(s.array(s.lazy(() => enrollmentSchema))),
      unreachable: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
