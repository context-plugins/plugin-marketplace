import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Internal ID of the language group associated with the agent */
export type LanguageGroupId = number;

export const languageGroupIdSchema: Schema<LanguageGroupId> = s.of<LanguageGroupId>(s.union([s.int()]));
