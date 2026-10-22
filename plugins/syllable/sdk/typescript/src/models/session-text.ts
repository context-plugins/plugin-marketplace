import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { langSchema, type Lang } from "./unions/lang.js";
import { source4Schema, type Source4 } from "./unions/source4.js";
import { sttConfidenceSchema, type SttConfidence } from "./unions/stt-confidence.js";
import { text2Schema, type Text2 } from "./unions/text2.js";

/** Information about a given message from a user to an agent or vice-versa. */
export type SessionText = {
  /** Timestamp of the message */
  timestamp: Date;
  /**
   * ISO 639 code of the language used for the message (may appear as "unset" if was not
   * conclusively determined)
   */
  lang?: Lang;
  /** Whether the user or agent sent the message */
  source?: Source4;
  /** Content of the message */
  text?: Text2;
  /**
   * The STT provider's confidence for a user utterance. Absent on agent turns, and on user turns
   * whose backend reported nothing -- absence means "not captured", never "the provider was certain
   * this was wrong". NOT one comparable quantity: read `provider` and `utterance_source` before
   * interpreting a value, and do not aggregate across providers. Deepgram reports a genuine
   * acoustic confidence and a per-word breakdown; Google reports an utterance score its own
   * documentation disclaims and no words; on Deepgram Flux the utterance score is the weakest word,
   * computed by us rather than reported.
   */
  sttConfidence?: SttConfidence;
};

export const sessionTextSchema: Schema<SessionText> = s.object<SessionText>({
  timestamp: s.dateTime(),
  lang: s.optional(s.lazy(() => langSchema)),
  source: s.optional(s.lazy(() => source4Schema)),
  text: s.optional(s.lazy(() => text2Schema)),
  sttConfidence: s.optional(s.lazy(() => sttConfidenceSchema)),
  _keysMap: {
    sttConfidence: "stt_confidence",
  },
});
