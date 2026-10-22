import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { languageGroupResponseSchema, type LanguageGroupResponse } from "../language-group-response.js";

/** The language group associated with the agent */
export type LanguageGroup = LanguageGroupResponse;

export const languageGroupSchema: Schema<LanguageGroup> = s.of<LanguageGroup>(
  s.union([s.lazy(() => languageGroupResponseSchema)]),
);
