import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration options for the landing page appearance and behavior. */
export type LandingPageConfiguration = {
  /** URL to link back to the partner site from the landing page. */
  partnerLinkbackUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const landingPageConfigurationProperties: s.Shape<LandingPageConfiguration> = {
  partnerLinkbackUrl: s.optional(s.string()),
  _keysMap: {
    partnerLinkbackUrl: "partner_linkback_url",
  },
};

export const landingPageConfigurationInternalSchema: Schema<LandingPageConfiguration> =
  s.object<LandingPageConfiguration>(landingPageConfigurationProperties, { additionalProperties: s.json() });

export const landingPageConfigurationSchema: Schema<LandingPageConfiguration> = s.lazySchema(() =>
  s.object<LandingPageConfiguration>(
    {
      ...landingPageConfigurationProperties,
      partnerLinkbackUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
