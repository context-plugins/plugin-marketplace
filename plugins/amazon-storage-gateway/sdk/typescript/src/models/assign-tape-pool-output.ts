import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AssignTapePoolOutput = {
  /** The unique Amazon Resource Names (ARN) of the virtual tape that was added to the tape pool. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignTapePoolOutputSchema: Schema<AssignTapePoolOutput> = s.object<AssignTapePoolOutput>(
  {
    tapeArn: s.optional(s.string()),
    _keysMap: {
      tapeArn: "TapeARN",
    },
  },
  { additionalProperties: s.json() },
);
