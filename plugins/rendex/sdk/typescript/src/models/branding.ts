import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional theme applied to the artifact header, body, and footer. */
export type Branding = {
  /** Absolute http(s) URL of a logo image shown in the header. */
  logo?: string;
  /** CSS color for the accent bar */
  accentColor?: string;
  /** CSS font-family stack applied to the body (e.g. 'Georgia */
  font?: string;
  /** Plain-text header line shown beside the logo. */
  header?: string;
  /** Plain-text footer line shown at the bottom of every page. */
  footer?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const brandingProperties: s.Shape<Branding> = {
  logo: s.optional(s.string()),
  accentColor: s.optional(s.string()),
  font: s.optional(s.string()),
  header: s.optional(s.string()),
  footer: s.optional(s.string()),
};

export const brandingInternalSchema: Schema<Branding> = s.object<Branding>(brandingProperties, {
  additionalProperties: s.json(),
});

export const brandingSchema: Schema<Branding> = s.lazySchema(() =>
  s.object<Branding>(
    {
      ...brandingProperties,
      logo: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
