import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TranscriptPartial = {
  piecesDone: number;
  piecesTotal: number;
  secondsTotal: number;
  secondsTranscribed: number;
  speakersFinal: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptPartialSchema: Schema<TranscriptPartial> = s.object<TranscriptPartial>(
  {
    piecesDone: s.int(),
    piecesTotal: s.int(),
    secondsTotal: s.int(),
    secondsTranscribed: s.int(),
    speakersFinal: s.boolean(),
    _keysMap: {
      piecesDone: "pieces_done",
      piecesTotal: "pieces_total",
      secondsTotal: "seconds_total",
      secondsTranscribed: "seconds_transcribed",
      speakersFinal: "speakers_final",
    },
  },
  { additionalProperties: s.json() },
);
