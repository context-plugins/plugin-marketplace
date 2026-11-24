import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RetrieveTapeArchiveOutput = {
  /** The Amazon Resource Name (ARN) of the retrieved virtual tape. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retrieveTapeArchiveOutputSchema: Schema<RetrieveTapeArchiveOutput> =
  s.object<RetrieveTapeArchiveOutput>(
    {
      tapeArn: s.optional(s.string()),
      _keysMap: {
        tapeArn: "TapeARN",
      },
    },
    { additionalProperties: s.json() },
  );
