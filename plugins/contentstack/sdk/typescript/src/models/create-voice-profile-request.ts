import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating a Voice Profile. */
export type CreateVoiceProfileRequest = {
  /** Display name for the Voice Profile. */
  name: string;
  /** Description of the voice profile's purpose. */
  description?: string;
  /** Tonal characteristics for the voice profile. */
  tone?: string;
  /** Writing style guidelines for AI content generation. */
  styleGuidelines?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createVoiceProfileRequestSchema: Schema<CreateVoiceProfileRequest> =
  s.object<CreateVoiceProfileRequest>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      tone: s.optional(s.string()),
      styleGuidelines: s.optional(s.string()),
      _keysMap: {
        styleGuidelines: "style_guidelines",
      },
    },
    { additionalProperties: s.json() },
  );
