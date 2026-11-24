import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotifyWhenUploadedOutput = {
  fileShareArn?: string;
  notificationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifyWhenUploadedOutputSchema: Schema<NotifyWhenUploadedOutput> =
  s.object<NotifyWhenUploadedOutput>(
    {
      fileShareArn: s.optional(s.string()),
      notificationId: s.optional(s.string()),
      _keysMap: {
        fileShareArn: "FileShareARN",
        notificationId: "NotificationId",
      },
    },
    { additionalProperties: s.json() },
  );
