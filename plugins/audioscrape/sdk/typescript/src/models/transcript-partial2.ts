import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Present (with HTTP 206) when the recording is still being transcribed in parts and `segments`
 * covers only the finished ones. Speaker labels are provisional until the response is a plain 200.
 */
export type TranscriptPartial2 = {
  piecesDone: number;
  piecesTotal: number;
  secondsTotal: number;
  secondsTranscribed: number;
  speakersFinal: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptPartial2Schema: Schema<TranscriptPartial2> = s.object<TranscriptPartial2>(
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
