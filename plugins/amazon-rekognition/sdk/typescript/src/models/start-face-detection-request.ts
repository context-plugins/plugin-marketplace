import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faceAttributesSchema, type FaceAttributes } from "./face-attributes.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { videoSchema, type Video } from "./video.js";

export type StartFaceDetectionRequest = {
  video: Video;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartFaceDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the
   * same job from being accidently started more than once.
   */
  clientRequestToken?: string;
  notificationChannel?: NotificationChannel;
  /**
   * The face attributes you want returned. DEFAULT - The following subset of facial attributes are
   * returned: BoundingBox, Confidence, Pose, Quality and Landmarks. ALL - All facial attributes are
   * returned.
   */
  faceAttributes?: FaceAttributes;
  /**
   * An identifier you specify that's returned in the completion notification that's published to
   * your Amazon Simple Notification Service topic. For example, you can use JobTag to group related
   * jobs and identify them in the completion notification.
   */
  jobTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startFaceDetectionRequestSchema: Schema<StartFaceDetectionRequest> =
  s.object<StartFaceDetectionRequest>(
    {
      video: videoSchema,
      clientRequestToken: s.optional(s.string()),
      notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
      faceAttributes: s.optional(s.lazy(() => faceAttributesSchema)),
      jobTag: s.optional(s.string()),
      _keysMap: {
        video: "Video",
        clientRequestToken: "ClientRequestToken",
        notificationChannel: "NotificationChannel",
        faceAttributes: "FaceAttributes",
        jobTag: "JobTag",
      },
    },
    { additionalProperties: s.json() },
  );
