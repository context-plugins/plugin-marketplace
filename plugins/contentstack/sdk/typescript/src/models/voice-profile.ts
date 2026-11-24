import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Voice Profile defining writing style and tone for AI content generation. */
export type VoiceProfile = {
  /** Unique identifier of the Voice Profile. */
  uid?: string;
  /** Display name of the Voice Profile. */
  name?: string;
  /** Description of the voice profile's intended use case. */
  description?: string;
  /**
   * The tonal characteristics of the voice profile such as formal, conversational, or
   * authoritative.
   */
  tone?: string;
  /** Writing style guidelines that define how content should be structured. */
  styleGuidelines?: string;
  /** UID of the Brand Kit this Voice Profile belongs to. */
  brandKitUid?: string;
  /** ISO 8601 timestamp when the Voice Profile was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const voiceProfileSchema: Schema<VoiceProfile> = s.object<VoiceProfile>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    tone: s.optional(s.string()),
    styleGuidelines: s.optional(s.string()),
    brandKitUid: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      styleGuidelines: "style_guidelines",
      brandKitUid: "brand_kit_uid",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
