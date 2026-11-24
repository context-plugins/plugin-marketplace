import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { videoSchema, type Video } from "./video.js";

export type StartContentModerationRequest = {
  video: Video;
  /**
   * Specifies the minimum confidence that Amazon Rekognition must have in order to return a
   * moderated content label. Confidence represents how certain Amazon Rekognition is that the
   * moderated content is correctly identified. 0 is the lowest confidence. 100 is the highest
   * confidence. Amazon Rekognition doesn't return any moderated content labels with a confidence
   * level lower than this specified value. If you don't specify MinConfidence, GetContentModeration
   * returns labels with confidence values greater than or equal to 50 percent.
   */
  minConfidence?: number;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartContentModeration requests, the same JobId is returned. Use ClientRequestToken to prevent
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startContentModerationRequestSchema: Schema<StartContentModerationRequest> =
  s.object<StartContentModerationRequest>(
    {
      video: videoSchema,
      minConfidence: s.optional(s.float64()),
      clientRequestToken: s.optional(s.string()),
      notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        video: "Video",
        minConfidence: "MinConfidence",
        clientRequestToken: "ClientRequestToken",
        notificationChannel: "NotificationChannel",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
