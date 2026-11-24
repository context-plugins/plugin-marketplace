import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelArchivalOutput = {
  /** The Amazon Resource Name (ARN) of the virtual tape for which archiving was canceled. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelArchivalOutputSchema: Schema<CancelArchivalOutput> = s.object<CancelArchivalOutput>(
  {
    tapeArn: s.optional(s.string()),
    _keysMap: {
      tapeArn: "TapeARN",
    },
  },
  { additionalProperties: s.json() },
);
