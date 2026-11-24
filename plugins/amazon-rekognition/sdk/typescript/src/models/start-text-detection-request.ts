import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import {
  startTextDetectionFiltersSchema,
  type StartTextDetectionFilters,
} from "./start-text-detection-filters.js";
import { videoSchema, type Video } from "./video.js";

export type StartTextDetectionRequest = {
  video: Video;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartTextDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the
   * same job from being accidentaly started more than once.
   */
  clientRequestToken?: string;
  notificationChannel?: NotificationChannel;
  /**
   * An identifier returned in the completion status published by your Amazon Simple Notification
   * Service topic. For example, you can use JobTag to group related jobs and identify them in the
   * completion notification.
   */
  jobTag?: string;
  filters?: StartTextDetectionFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTextDetectionRequestSchema: Schema<StartTextDetectionRequest> =
  s.object<StartTextDetectionRequest>(
    {
      video: videoSchema,
      clientRequestToken: s.optional(s.string()),
      notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
      jobTag: s.optional(s.string()),
      filters: s.optional(s.lazy(() => startTextDetectionFiltersSchema)),
      _keysMap: {
        video: "Video",
        clientRequestToken: "ClientRequestToken",
        notificationChannel: "NotificationChannel",
        jobTag: "JobTag",
        filters: "Filters",
      },
    },
    { additionalProperties: s.json() },
  );
