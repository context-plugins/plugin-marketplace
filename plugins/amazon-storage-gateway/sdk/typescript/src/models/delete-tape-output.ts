import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapeOutput = {
  /** The Amazon Resource Name (ARN) of the deleted virtual tape. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapeOutputSchema: Schema<DeleteTapeOutput> = s.object<DeleteTapeOutput>(
  {
    tapeArn: s.optional(s.string()),
    _keysMap: {
      tapeArn: "TapeARN",
    },
  },
  { additionalProperties: s.json() },
);
