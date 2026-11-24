import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateNfsFileShareOutput = {
  /** The Amazon Resource Name (ARN) of the newly created file share. */
  fileShareArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createNfsFileShareOutputSchema: Schema<CreateNfsFileShareOutput> =
  s.object<CreateNfsFileShareOutput>(
    {
      fileShareArn: s.optional(s.string()),
      _keysMap: {
        fileShareArn: "FileShareARN",
      },
    },
    { additionalProperties: s.json() },
  );
