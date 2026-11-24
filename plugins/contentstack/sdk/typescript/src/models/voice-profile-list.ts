import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { voiceProfileSchema, type VoiceProfile } from "./voice-profile.js";

/** A list of Voice Profiles for a Brand Kit. */
export type VoiceProfileList = {
  /** Array of Voice Profile objects. */
  data?: VoiceProfile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const voiceProfileListSchema: Schema<VoiceProfileList> = s.object<VoiceProfileList>(
  {
    data: s.optional(s.array(s.lazy(() => voiceProfileSchema))),
  },
  { additionalProperties: s.json() },
);
