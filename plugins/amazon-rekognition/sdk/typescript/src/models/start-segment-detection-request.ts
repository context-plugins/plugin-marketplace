import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { segmentTypeSchema, type SegmentType } from "./segment-type.js";
import {
  startSegmentDetectionFiltersSchema,
  type StartSegmentDetectionFilters,
} from "./start-segment-detection-filters.js";
import { videoSchema, type Video } from "./video.js";

export type StartSegmentDetectionRequest = {
  video: Video;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartSegmentDetection requests, the same JobId is returned. Use ClientRequestToken to prevent
   * the same job from being accidently started more than once.
   */
  clientRequestToken?: string;
  notificationChannel?: NotificationChannel;
  /**
   * An identifier you specify that's returned in the completion notification that's published to
   * your Amazon Simple Notification Service topic. For example, you can use JobTag to group related
   * jobs and identify them in the completion notification.
   */
  jobTag?: string;
  filters?: StartSegmentDetectionFilters;
  /** An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT. */
  segmentTypes: SegmentType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSegmentDetectionRequestSchema: Schema<StartSegmentDetectionRequest> =
  s.object<StartSegmentDetectionRequest>(
    {
      video: videoSchema,
      clientRequestToken: s.optional(s.string()),
      notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
      jobTag: s.optional(s.string()),
      filters: s.optional(s.lazy(() => startSegmentDetectionFiltersSchema)),
      segmentTypes: s.array(s.lazy(() => segmentTypeSchema)),
      _keysMap: {
        video: "Video",
        clientRequestToken: "ClientRequestToken",
        notificationChannel: "NotificationChannel",
        jobTag: "JobTag",
        filters: "Filters",
        segmentTypes: "SegmentTypes",
      },
    },
    { additionalProperties: s.json() },
  );
