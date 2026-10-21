import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languageConfigSchema, type LanguageConfig } from "./language-config.js";
import { description7Schema, type Description7 } from "./unions/description7.js";

/** Request model to create a voice group. */
export type VoiceGroupCreateRequest = {
  /** The name of the language group. */
  name: string;
  /** Description of the language group. */
  description?: Description7;
  /** Voice and DTMF configurations for each language in the group. */
  languageConfigs: LanguageConfig[];
  /**
   * Whether a custom message using the language group to generate a language DTMF menu should skip
   * the agent's current language in the menu.
   */
  skipCurrentLanguageInMessage: boolean;
};

export const voiceGroupCreateRequestSchema: Schema<VoiceGroupCreateRequest> =
  s.object<VoiceGroupCreateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description7Schema)),
    languageConfigs: s.array(s.lazy(() => languageConfigSchema)),
    skipCurrentLanguageInMessage: s.boolean(),
    _keysMap: {
      languageConfigs: "language_configs",
      skipCurrentLanguageInMessage: "skip_current_language_in_message",
    },
  });
