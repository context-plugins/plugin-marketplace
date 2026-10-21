import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReferenceDatum = {
  /** Display name shown to the user. */
  name?: string;
  /** Technical identifier (numeric ID, UUID, etc.). */
  id?: string;
  /** Item type (e.g. `project`, `issue`, `file`, `notebook`, `page`). */
  type?: string;
  /** Source application (e.g. `jira`, `confluence`, `sharepoint`, `slack`, `drive`, `gmail`). */
  app?: string;
  /** URL to open the item in a browser. */
  webUrl?: string;
  /**
   * App-specific fields keyed by name (e.g. `key` for a Jira project, `siteId` for a SharePoint
   * document).
   */
  metadata?: Record<string, string>;
};

export const referenceDatumSchema: Schema<ReferenceDatum> = s.object<ReferenceDatum>({
  name: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  app: s.optional(s.string()),
  webUrl: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
});
