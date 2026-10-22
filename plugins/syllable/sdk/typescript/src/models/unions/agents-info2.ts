import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { languageGroupAgentInfoSchema, type LanguageGroupAgentInfo } from "../language-group-agent-info.js";

/** IDs and names of the agents linked to the language group */
export type AgentsInfo2 = LanguageGroupAgentInfo[];

export const agentsInfo2Schema: Schema<AgentsInfo2> = s.of<AgentsInfo2>(
  s.union([s.array(s.lazy(() => languageGroupAgentInfoSchema))]),
);
