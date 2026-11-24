import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SiteSnippet = {
  siteId: number;
  scriptUrl: string;
  /**
   * The tag to paste, ready as it stands — install it verbatim rather than rebuilding it from
   * `script_url`. A hobby site's tag carries a `data-id` attribute as well: its script is a `/t/`
   * bundle addressed by hash, and that attribute is the only place the counter inside it can read
   * the site id. A tag for a paid site needs no attributes.
   */
  snippet: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const siteSnippetSchema: Schema<SiteSnippet> = s.object<SiteSnippet>(
  {
    siteId: s.int(),
    scriptUrl: s.string(),
    snippet: s.string(),
    _keysMap: {
      siteId: "site_id",
      scriptUrl: "script_url",
    },
  },
  { additionalProperties: s.json() },
);
