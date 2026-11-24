import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EvictFilesFailingUploadOutput = {
  /**
   * The randomly generated ID of the CloudWatch notification associated with the cache clean
   * operation. This ID is in UUID format.
   */
  notificationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evictFilesFailingUploadOutputSchema: Schema<EvictFilesFailingUploadOutput> =
  s.object<EvictFilesFailingUploadOutput>(
    {
      notificationId: s.optional(s.string()),
      _keysMap: {
        notificationId: "NotificationId",
      },
    },
    { additionalProperties: s.json() },
  );
