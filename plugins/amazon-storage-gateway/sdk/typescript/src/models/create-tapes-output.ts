import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateTapesOutput = {
  /**
   * A list of unique Amazon Resource Names (ARNs) that represents the virtual tapes that were
   * created.
   */
  tapeArNs?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTapesOutputSchema: Schema<CreateTapesOutput> = s.object<CreateTapesOutput>(
  {
    tapeArNs: s.optional(s.array(s.string())),
    _keysMap: {
      tapeArNs: "TapeARNs",
    },
  },
  { additionalProperties: s.json() },
);
