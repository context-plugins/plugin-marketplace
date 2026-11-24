import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotifyWhenUploadedInput = {
  fileShareArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifyWhenUploadedInputSchema: Schema<NotifyWhenUploadedInput> =
  s.object<NotifyWhenUploadedInput>(
    {
      fileShareArn: s.string(),
      _keysMap: {
        fileShareArn: "FileShareARN",
      },
    },
    { additionalProperties: s.json() },
  );
