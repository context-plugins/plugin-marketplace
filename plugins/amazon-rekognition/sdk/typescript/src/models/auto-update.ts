import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether automatic retraining should be attempted for the versions of the project.
 * Automatic retraining is done as a best effort. Required argument for Content Moderation.
 * Applicable only to adapters.
 */
export const AutoUpdate = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type AutoUpdate = (typeof AutoUpdate)[keyof typeof AutoUpdate] | (string & {});

export const autoUpdateSchema: EnumSchema<AutoUpdate> = s.enumOf<AutoUpdate>(AutoUpdate);
