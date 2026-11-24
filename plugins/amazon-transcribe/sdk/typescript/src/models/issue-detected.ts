import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { characterOffsetsSchema, type CharacterOffsets } from "./character-offsets.js";

export type IssueDetected = {
  characterOffsets?: CharacterOffsets;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issueDetectedSchema: Schema<IssueDetected> = s.object<IssueDetected>(
  {
    characterOffsets: s.optional(s.lazy(() => characterOffsetsSchema)),
    _keysMap: {
      characterOffsets: "CharacterOffsets",
    },
  },
  { additionalProperties: s.json() },
);
