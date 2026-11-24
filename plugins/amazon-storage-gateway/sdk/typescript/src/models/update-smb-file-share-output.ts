import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateSmbFileShareOutput = {
  /** The Amazon Resource Name (ARN) of the updated SMB file share. */
  fileShareArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSmbFileShareOutputSchema: Schema<UpdateSmbFileShareOutput> =
  s.object<UpdateSmbFileShareOutput>(
    {
      fileShareArn: s.optional(s.string()),
      _keysMap: {
        fileShareArn: "FileShareARN",
      },
    },
    { additionalProperties: s.json() },
  );
