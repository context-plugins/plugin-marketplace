import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditImageSchema, type AuditImage } from "./audit-image.js";
import { challengeSchema, type Challenge } from "./challenge.js";
import { feedbackItemSchema, type FeedbackItem } from "./feedback-item.js";
import { sessionMetadataSchema, type SessionMetadata } from "./session-metadata.js";
import {
  statusAmazonRekognitionFaceLivenessApiSchema,
  type StatusAmazonRekognitionFaceLivenessApi,
} from "./status-amazon-rekognition-face-liveness-api.js";

export type GetFaceLivenessSessionResultsResponse = {
  /** The sessionId for which this request was called. */
  sessionId: string;
  /**
   * Represents a status corresponding to the state of the session. Possible statuses are: CREATED,
   * IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.
   */
  status: StatusAmazonRekognitionFaceLivenessApi;
  /**
   * Probabalistic confidence score for if the person in the given video was live, represented as a
   * float value between 0 to 100.
   */
  confidence?: number;
  referenceImage?: AuditImage;
  /**
   * A set of images from the Face Liveness video that can be used for audit purposes. It includes a
   * bounding box of the face and the Base64-encoded bytes that return an image. If the
   * CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded
   * to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined, raw
   * bytes are sent instead.
   */
  auditImages?: AuditImage[];
  challenge?: Challenge;
  /**
   * A list of conditions that were detected in the Face Liveness video and that contributed to the
   * returned Confidence score. Each item contains a code and a human-readable message. Feedback is
   * returned only for sessions with a Status of SUCCEEDED, and the list is empty when no such
   * conditions were detected.
   */
  feedback?: FeedbackItem[];
  metadata?: SessionMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getFaceLivenessSessionResultsResponseSchema: Schema<GetFaceLivenessSessionResultsResponse> =
  s.object<GetFaceLivenessSessionResultsResponse>(
    {
      sessionId: s.string(),
      status: statusAmazonRekognitionFaceLivenessApiSchema,
      confidence: s.optional(s.float64()),
      referenceImage: s.optional(s.lazy(() => auditImageSchema)),
      auditImages: s.optional(s.array(s.lazy(() => auditImageSchema))),
      challenge: s.optional(s.lazy(() => challengeSchema)),
      feedback: s.optional(s.array(s.lazy(() => feedbackItemSchema))),
      metadata: s.optional(s.lazy(() => sessionMetadataSchema)),
      _keysMap: {
        sessionId: "SessionId",
        status: "Status",
        confidence: "Confidence",
        referenceImage: "ReferenceImage",
        auditImages: "AuditImages",
        challenge: "Challenge",
        feedback: "Feedback",
        metadata: "Metadata",
      },
    },
    { additionalProperties: s.json() },
  );
