import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Kind = {
  TranscriptBatch: "transcript_batch",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);
