import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of voice group fields supported for filtering/sorting on list endpoint. */
export const VoiceGroupProperties = {
  Name: "name",
  Description: "description",
  SkipCurrentLanguageInMessage: "skip_current_language_in_message",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
  LifecycleStatus: "lifecycle_status",
} as const;
export type VoiceGroupProperties =
  | (typeof VoiceGroupProperties)[keyof typeof VoiceGroupProperties]
  | (string & {});

export const voiceGroupPropertiesSchema: EnumSchema<VoiceGroupProperties> =
  s.enumOf<VoiceGroupProperties>(VoiceGroupProperties);
