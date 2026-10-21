import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppResult = {
  /** The app or other repository type this represents */
  datasource: string;
  /**
   * The datasource-specific type of the document (e.g. for Jira issues, this is the issue type such
   * as Bug or Feature Request).
   */
  docType?: string;
  /**
   * Mimetype is used to differentiate between sub applications from a datasource (e.g. Sheets, Docs
   * from Gdrive)
   */
  mimeType?: string;
  /** If there is available icon URL. */
  iconUrl?: string;
};

export const appResultSchema: Schema<AppResult> = s.object<AppResult>({
  datasource: s.string(),
  docType: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  iconUrl: s.optional(s.string()),
});
