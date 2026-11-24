import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateNfsFileShareOutput = {
  /** The Amazon Resource Name (ARN) of the updated file share. */
  fileShareArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateNfsFileShareOutputSchema: Schema<UpdateNfsFileShareOutput> =
  s.object<UpdateNfsFileShareOutput>(
    {
      fileShareArn: s.optional(s.string()),
      _keysMap: {
        fileShareArn: "FileShareARN",
      },
    },
    { additionalProperties: s.json() },
  );
