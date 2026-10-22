import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dedicatedEndpointStatusSchema, type DedicatedEndpointStatus } from "./dedicated-endpoint-status.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

/** Dedicated endpoint list response. */
export type DedicatedEndpointListResponse = {
  /** The response data containing endpoint statuses. */
  data?: Record<string, DedicatedEndpointStatus>;
  /** The next cursor for pagination. */
  nextCursor?: NextCursor;
};

export const dedicatedEndpointListResponseSchema: Schema<DedicatedEndpointListResponse> =
  s.object<DedicatedEndpointListResponse>({
    data: s.optional(
      s.record(
        s.string(),
        s.lazy(() => dedicatedEndpointStatusSchema),
      ),
    ),
    nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
  });
