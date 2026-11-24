import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelRetrievalOutput = {
  /** The Amazon Resource Name (ARN) of the virtual tape for which retrieval was canceled. */
  tapeArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelRetrievalOutputSchema: Schema<CancelRetrievalOutput> = s.object<CancelRetrievalOutput>(
  {
    tapeArn: s.optional(s.string()),
    _keysMap: {
      tapeArn: "TapeARN",
    },
  },
  { additionalProperties: s.json() },
);
