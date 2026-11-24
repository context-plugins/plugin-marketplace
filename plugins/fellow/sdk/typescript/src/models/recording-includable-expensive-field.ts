import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordingIncludableExpensiveField = {
  /** @default false */
  transcript?: boolean;
  /** @default false */
  aiNotes?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingIncludableExpensiveFieldSchema: Schema<RecordingIncludableExpensiveField> =
  s.object<RecordingIncludableExpensiveField>(
    {
      transcript: s.defaulted(s.boolean(), false),
      aiNotes: s.defaulted(s.boolean(), false),
      _keysMap: {
        aiNotes: "ai_notes",
      },
    },
    { additionalProperties: s.json() },
  );
