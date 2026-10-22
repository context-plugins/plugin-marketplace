import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about an agent linked to a language group. */
export type LanguageGroupAgentInfo = {
  /** The ID of the agent */
  id: number;
  /** The name of the agent */
  name: string;
};

export const languageGroupAgentInfoSchema: Schema<LanguageGroupAgentInfo> = s.object<LanguageGroupAgentInfo>({
  id: s.int(),
  name: s.string(),
});
