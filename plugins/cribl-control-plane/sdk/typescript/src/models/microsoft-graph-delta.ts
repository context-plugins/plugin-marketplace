import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Internal opt-in for the Microsoft Graph deltaLink state-tracking hook. Set programmatically by
 * the Microsoft Graph source when the configured URL targets a /delta endpoint; not
 * user-configurable.
 */
export type MicrosoftGraphDelta = {
  /** Response-body field name to extract as the delta link (typically '@odata.deltaLink') */
  deltaLinkAttribute?: string;
};

export const microsoftGraphDeltaSchema: Schema<MicrosoftGraphDelta> = s.object<MicrosoftGraphDelta>({
  deltaLinkAttribute: s.optional(s.string()),
});
