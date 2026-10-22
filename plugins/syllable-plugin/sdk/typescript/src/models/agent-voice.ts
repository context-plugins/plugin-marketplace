import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentLanguageSchema, type AgentLanguage } from "./agent-language.js";
import { agentVoiceDisplayName1Schema, type AgentVoiceDisplayName1 } from "./agent-voice-display-name1.js";
import { agentVoiceGender2Schema, type AgentVoiceGender2 } from "./agent-voice-gender2.js";
import { agentVoiceModel2Schema, type AgentVoiceModel2 } from "./agent-voice-model2.js";
import { agentVoiceVarName2Schema, type AgentVoiceVarName2 } from "./agent-voice-var-name2.js";
import { ttsProvider1Schema, type TtsProvider1 } from "./tts-provider1.js";
import { fallbackSchema, type Fallback } from "./unions/fallback.js";
import { statusSchema, type Status } from "./unions/status.js";
import { sunsetDateSchema, type SunsetDate } from "./unions/sunset-date.js";

/** Voice option for an agent. */
export type AgentVoice = {
  /** The provider for the voice */
  provider: TtsProvider1;
  /** The display name of the voice */
  displayName: AgentVoiceDisplayName1;
  /** The variable name of the voice (used when processing messages) */
  varName: AgentVoiceVarName2;
  /** The gender of the voice */
  gender: AgentVoiceGender2;
  /** The model of the voice */
  model: AgentVoiceModel2;
  /** Languages supported by the voice */
  supportedLanguages: AgentLanguage[];
  /** Whether the voice is in the deprecation warning window */
  deprecated: boolean;
  /** Date the voice becomes retired and can no longer be saved or selected */
  sunsetDate?: SunsetDate;
  /** Whether the voice is force-retired regardless of sunset_date @default false */
  removed?: boolean;
  /** Voice substituted at runtime for critical features once this one is retired */
  fallback?: Fallback;
  /**
   * Effective lifecycle status, resolved server-side against the current date. Populated on API
   * responses; unset in the static catalog.
   */
  status?: Status;
};

export const agentVoiceSchema: Schema<AgentVoice> = s.object<AgentVoice>({
  provider: ttsProvider1Schema,
  displayName: agentVoiceDisplayName1Schema,
  varName: agentVoiceVarName2Schema,
  gender: agentVoiceGender2Schema,
  model: agentVoiceModel2Schema,
  supportedLanguages: s.array(s.lazy(() => agentLanguageSchema)),
  deprecated: s.boolean(),
  sunsetDate: s.optional(s.lazy(() => sunsetDateSchema)),
  removed: s.defaulted(s.boolean(), false),
  fallback: s.optional(s.lazy(() => fallbackSchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  _keysMap: {
    displayName: "display_name",
    varName: "var_name",
    supportedLanguages: "supported_languages",
    sunsetDate: "sunset_date",
  },
});
