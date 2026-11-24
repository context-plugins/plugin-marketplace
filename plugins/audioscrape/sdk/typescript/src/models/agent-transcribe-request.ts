import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgentTranscribeRequest = {
  title?: string | null;
  /** https URL of an audio or video file. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentTranscribeRequestSchema: Schema<AgentTranscribeRequest> = s.object<AgentTranscribeRequest>(
  {
    title: s.optionalNullable(s.string()),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
