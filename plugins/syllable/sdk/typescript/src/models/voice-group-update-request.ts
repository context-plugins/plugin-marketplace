import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languageConfigSchema, type LanguageConfig } from "./language-config.js";
import { description7Schema, type Description7 } from "./unions/description7.js";
import { editComments1Schema, type EditComments1 } from "./unions/edit-comments1.js";

/** Request model to update an existing voice group. */
export type VoiceGroupUpdateRequest = {
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
  /** The ID of the language group to update. */
  id: number;
  /** Comments for the most recent edit to the language group. */
  editComments?: EditComments1;
};

export const voiceGroupUpdateRequestSchema: Schema<VoiceGroupUpdateRequest> =
  s.object<VoiceGroupUpdateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description7Schema)),
    languageConfigs: s.array(s.lazy(() => languageConfigSchema)),
    skipCurrentLanguageInMessage: s.boolean(),
    id: s.int(),
    editComments: s.optional(s.lazy(() => editComments1Schema)),
    _keysMap: {
      languageConfigs: "language_configs",
      skipCurrentLanguageInMessage: "skip_current_language_in_message",
      editComments: "edit_comments",
    },
  });
