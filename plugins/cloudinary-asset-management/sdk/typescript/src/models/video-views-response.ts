import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { videoViewSchema, type VideoView } from "./video-view.js";

export type VideoViewsResponse = {
  /** Unique identifier for the request. */
  requestId?: string;
  /** Cursor value for pagination. */
  nextCursor?: string;
  data?: VideoView[];
};

export const videoViewsResponseSchema: Schema<VideoViewsResponse> = s.object<VideoViewsResponse>({
  requestId: s.optional(s.string()),
  nextCursor: s.optional(s.string()),
  data: s.optional(s.array(s.lazy(() => videoViewSchema))),
  _keysMap: {
    requestId: "request_id",
    nextCursor: "next_cursor",
  },
});
