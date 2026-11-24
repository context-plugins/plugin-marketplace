import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CharacterOffsets = {
  /**
   * Provides the character count of the first character where a match is identified. For example,
   * the first character associated with an issue or a category match in a segment transcript.
   */
  begin?: number;
  /**
   * Provides the character count of the last character where a match is identified. For example,
   * the last character associated with an issue or a category match in a segment transcript.
   */
  end?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const characterOffsetsSchema: Schema<CharacterOffsets> = s.object<CharacterOffsets>(
  {
    begin: s.optional(s.int()),
    end: s.optional(s.int()),
    _keysMap: {
      begin: "Begin",
      end: "End",
    },
  },
  { additionalProperties: s.json() },
);
