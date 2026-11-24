import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { videoSchema, type Video } from "./video.js";

export type StartFaceSearchRequest = {
  video: Video;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartFaceSearch requests, the same JobId is returned. Use ClientRequestToken to prevent the
   * same job from being accidently started more than once.
   */
  clientRequestToken?: string;
  /**
   * The minimum confidence in the person match to return. For example, don't return any matches
   * where confidence in matches is less than 70%. The default value is 80%.
   */
  faceMatchThreshold?: number;
  /** ID of the collection that contains the faces you want to search for. */
  collectionId: string;
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

export const startFaceSearchRequestSchema: Schema<StartFaceSearchRequest> = s.object<StartFaceSearchRequest>(
  {
    video: videoSchema,
    clientRequestToken: s.optional(s.string()),
    faceMatchThreshold: s.optional(s.float64()),
    collectionId: s.string(),
    notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
    jobTag: s.optional(s.string()),
    _keysMap: {
      video: "Video",
      clientRequestToken: "ClientRequestToken",
      faceMatchThreshold: "FaceMatchThreshold",
      collectionId: "CollectionId",
      notificationChannel: "NotificationChannel",
      jobTag: "JobTag",
    },
  },
  { additionalProperties: s.json() },
);
