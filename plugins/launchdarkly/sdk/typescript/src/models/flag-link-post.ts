import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagLinkPost = {
  /** The flag link key */
  key?: string;
  /**
   * The integration key for an integration whose <code>manifest.json</code> includes the
   * <code>flagLink</code> capability, if this is a flag link for an existing integration. Do not
   * include for URL flag links.
   */
  integrationKey?: string;
  timestamp?: number;
  /** The URL for the external resource you are linking the flag to */
  deepLink?: string;
  /** The title of the flag link */
  title?: string;
  /** The description of the flag link */
  description?: string;
  /**
   * The metadata required by this integration in order to create a flag link, if this is a flag
   * link for an existing integration. Defined in the integration's <code>manifest.json</code> file
   * under <code>flagLink</code>.
   */
  metadata?: Record<string, string>;
};

export const flagLinkPostSchema: Schema<FlagLinkPost> = s.object<FlagLinkPost>({
  key: s.optional(s.string()),
  integrationKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  deepLink: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  metadata: s.optional(s.record(s.string(), s.string())),
});
