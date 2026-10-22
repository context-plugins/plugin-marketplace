import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { artifactTypeSchema, type ArtifactType } from "./artifact-type.js";

export type ChatSuggestion = {
  /** The actionable chat query to run when the user selects this suggestion. */
  query?: string;
  /** Button text to show for the suggestion action. */
  cta?: string;
  /** Targeted Glean Chat feature for the suggestion. */
  feature?: string;
  /** Type of the Artifact */
  artifactType?: ArtifactType;
  /** Document IDs that grounded the suggestion. */
  sourceDocumentIds?: string[];
};

export const chatSuggestionSchema: Schema<ChatSuggestion> = s.object<ChatSuggestion>({
  query: s.optional(s.string()),
  cta: s.optional(s.string()),
  feature: s.optional(s.string()),
  artifactType: s.optional(s.lazy(() => artifactTypeSchema)),
  sourceDocumentIds: s.optional(s.array(s.string())),
});
