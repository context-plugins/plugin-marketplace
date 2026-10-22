import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languageConfigSchema, type LanguageConfig } from "./language-config.js";
import { agentsInfo2Schema, type AgentsInfo2 } from "./unions/agents-info2.js";
import { description7Schema, type Description7 } from "./unions/description7.js";
import { editComments1Schema, type EditComments1 } from "./unions/edit-comments1.js";
import { validationIssues2Schema, type ValidationIssues2 } from "./unions/validation-issues2.js";

/**
 * Response model for voice group operations. A voice group is a collection of language, voice, and
 * DTMF configuration that can be linked to an agent to define the languages and voices it supports.
 * For more information, see [Console docs](https://docs.syllable.ai/Resources/VoiceGroups).
 */
export type VoiceGroupResponse = {
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
  /** IDs and names of the agents linked to the language group */
  agentsInfo?: AgentsInfo2;
  /** Timestamp of the last update to the language group. */
  updatedAt: Date;
  /** Email of the user who last updated the language group. */
  lastUpdatedBy: string;
  /**
   * Non-blocking findings for the saved voice group (e.g. a deprecated voice warning). Warnings and
   * infos are informational; errors block the save.
   */
  validationIssues?: ValidationIssues2;
};

export const voiceGroupResponseSchema: Schema<VoiceGroupResponse> = s.object<VoiceGroupResponse>({
  name: s.string(),
  description: s.optional(s.lazy(() => description7Schema)),
  languageConfigs: s.array(s.lazy(() => languageConfigSchema)),
  skipCurrentLanguageInMessage: s.boolean(),
  id: s.int(),
  editComments: s.optional(s.lazy(() => editComments1Schema)),
  agentsInfo: s.optional(s.lazy(() => agentsInfo2Schema)),
  updatedAt: s.dateTime(),
  lastUpdatedBy: s.string(),
  validationIssues: s.optional(s.lazy(() => validationIssues2Schema)),
  _keysMap: {
    languageConfigs: "language_configs",
    skipCurrentLanguageInMessage: "skip_current_language_in_message",
    editComments: "edit_comments",
    agentsInfo: "agents_info",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
    validationIssues: "validation_issues",
  },
});
