import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The event type, which is `transcript.text.delta` or `transcript.text.done`. */
export const Type = {
  TranscriptTextDelta: "transcript.text.delta",
  TranscriptTextDone: "transcript.text.done",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
