import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languageCode1Schema, type LanguageCode1 } from "./language-code1.js";

/** Language option for an agent. */
export type AgentLanguage = {
  /** Name of the language */
  name: string;
  /** BCP 47 code of the language */
  code: LanguageCode1;
};

export const agentLanguageSchema: Schema<AgentLanguage> = s.object<AgentLanguage>({
  name: s.string(),
  code: languageCode1Schema,
});
