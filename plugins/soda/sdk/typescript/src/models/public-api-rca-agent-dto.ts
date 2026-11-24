import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiRcaAgentDto = {
  model?: string;
  name: string;
  sessionId?: string;
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaAgentDtoSchema: Schema<PublicApiRcaAgentDto> = s.object<PublicApiRcaAgentDto>(
  {
    model: s.optional(s.string()),
    name: s.string(),
    sessionId: s.optional(s.string()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
