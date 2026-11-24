import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Outcome = {
  Ok: "ok",
  NoTranscript: "no_transcript",
  Processing: "processing",
  Error: "error",
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome] | (string & {});

export const outcomeSchema: EnumSchema<Outcome> = s.enumOf<Outcome>(Outcome);
