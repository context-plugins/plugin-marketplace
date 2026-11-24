import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusTranscriptfetchTranscriptsApi = {
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusTranscriptfetchTranscriptsApi =
  | (typeof StatusTranscriptfetchTranscriptsApi)[keyof typeof StatusTranscriptfetchTranscriptsApi]
  | (string & {});

export const statusTranscriptfetchTranscriptsApiSchema: EnumSchema<StatusTranscriptfetchTranscriptsApi> =
  s.enumOf<StatusTranscriptfetchTranscriptsApi>(StatusTranscriptfetchTranscriptsApi);
