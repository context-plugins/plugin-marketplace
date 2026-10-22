import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dedicatedEndpointSpecSchema, type DedicatedEndpointSpec } from "./dedicated-endpoint-spec.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

/** Dedicated endpoint version history response. */
export type DedicatedEndpointVersionHistoryResponse = {
  /** The response data containing endpoint versions. */
  data?: Record<string, DedicatedEndpointSpec>;
  /** The next cursor for pagination. */
  nextCursor?: NextCursor;
};

export const dedicatedEndpointVersionHistoryResponseSchema: Schema<DedicatedEndpointVersionHistoryResponse> =
  s.object<DedicatedEndpointVersionHistoryResponse>({
    data: s.optional(
      s.record(
        s.string(),
        s.lazy(() => dedicatedEndpointSpecSchema),
      ),
    ),
    nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
  });
