import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapeArchiveOutput = {
  /**
   * The Amazon Resource Name (ARN) of the virtual tape that was deleted from the virtual tape shelf
   * (VTS).
   */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapeArchiveOutputSchema: Schema<DeleteTapeArchiveOutput> =
  s.object<DeleteTapeArchiveOutput>(
    {
      tapeArn: s.optional(s.string()),
      _keysMap: {
        tapeArn: "TapeARN",
      },
    },
    { additionalProperties: s.json() },
  );
