import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deprecated enum mirroring `VoiceGroupProperties` values. */
export const LanguageGroupProperties = {
  Name: "name",
  Description: "description",
  SkipCurrentLanguageInMessage: "skip_current_language_in_message",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
  LifecycleStatus: "lifecycle_status",
} as const;
export type LanguageGroupProperties =
  | (typeof LanguageGroupProperties)[keyof typeof LanguageGroupProperties]
  | (string & {});

export const languageGroupPropertiesSchema: EnumSchema<LanguageGroupProperties> =
  s.enumOf<LanguageGroupProperties>(LanguageGroupProperties);
