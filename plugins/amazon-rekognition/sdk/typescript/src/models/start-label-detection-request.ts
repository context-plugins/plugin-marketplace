import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  featureAmazonRekognitionStoredVideoAnalysisApiSchema,
  type FeatureAmazonRekognitionStoredVideoAnalysisApi,
} from "./feature-amazon-rekognition-stored-video-analysis-api.js";
import { labelDetectionSettingsSchema, type LabelDetectionSettings } from "./label-detection-settings.js";
import { notificationChannelSchema, type NotificationChannel } from "./notification-channel.js";
import { videoSchema, type Video } from "./video.js";

export type StartLabelDetectionRequest = {
  video: Video;
  /**
   * Idempotent token used to identify the start request. If you use the same token with multiple
   * StartLabelDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the
   * same job from being accidently started more than once.
   */
  clientRequestToken?: string;
  /**
   * Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a
   * detected label. Confidence represents how certain Amazon Rekognition is that a label is
   * correctly identified.0 is the lowest confidence. 100 is the highest confidence. Amazon
   * Rekognition Video doesn't return any labels with a confidence level lower than this specified
   * value. If you don't specify MinConfidence, the operation returns labels and bounding boxes (if
   * detected) with confidence values greater than or equal to 50 percent.
   */
  minConfidence?: number;
  notificationChannel?: NotificationChannel;
  /**
   * An identifier you specify that's returned in the completion notification that's published to
   * your Amazon Simple Notification Service topic. For example, you can use JobTag to group related
   * jobs and identify them in the completion notification.
   */
  jobTag?: string;
  /**
   * The features to return after video analysis. You can specify that GENERAL_LABELS are returned.
   */
  features?: FeatureAmazonRekognitionStoredVideoAnalysisApi[];
  settings?: LabelDetectionSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startLabelDetectionRequestSchema: Schema<StartLabelDetectionRequest> =
  s.object<StartLabelDetectionRequest>(
    {
      video: videoSchema,
      clientRequestToken: s.optional(s.string()),
      minConfidence: s.optional(s.float64()),
      notificationChannel: s.optional(s.lazy(() => notificationChannelSchema)),
      jobTag: s.optional(s.string()),
      features: s.optional(s.array(s.lazy(() => featureAmazonRekognitionStoredVideoAnalysisApiSchema))),
      settings: s.optional(s.lazy(() => labelDetectionSettingsSchema)),
      _keysMap: {
        video: "Video",
        clientRequestToken: "ClientRequestToken",
        minConfidence: "MinConfidence",
        notificationChannel: "NotificationChannel",
        jobTag: "JobTag",
        features: "Features",
        settings: "Settings",
      },
    },
    { additionalProperties: s.json() },
  );
