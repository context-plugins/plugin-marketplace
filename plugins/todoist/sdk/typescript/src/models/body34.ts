import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicWorkspacePropertiesSchema,
  type PublicWorkspaceProperties,
} from "./public-workspace-properties.js";

export type Body34 = {
  /** Updated workspace name. Passing null or omitting this field will leave it unchanged. */
  name?: string | null;
  /** Updated workspace description. Passing null or omitting this field will leave it unchanged. */
  description?: string | null;
  /** Updated link sharing status. Passing null or omitting this field will leave it unchanged. */
  isLinkSharingEnabled?: boolean | null;
  /** Updated guest access status. Passing null or omitting this field will leave it unchanged. */
  isGuestAllowed?: boolean | null;
  /**
   * Updated workspace email domain. Passing null or omitting this field will leave it unchanged.
   */
  domainName?: string | null;
  /**
   * Updated domain discovery setting. Passing null or omitting this field will leave it unchanged.
   */
  domainDiscovery?: boolean | null;
  /**
   * Updated email domain restriction setting. Passing null or omitting this field will leave it
   * unchanged.
   */
  restrictEmailDomains?: boolean | null;
  /** Updated workspace properties. Passing null or omitting this field will leave it unchanged. */
  properties?: PublicWorkspaceProperties | null;
  /** Updated trial pending state. Passing null or omitting this field will leave it unchanged. */
  isTrialPending?: boolean | null;
  /**
   * Regenerate workspace invite code when set. Passing null or omitting this field will leave it
   * unchanged.
   */
  inviteCode?: string | null;
  /**
   * Updated collapse state for current user. Passing null or omitting this field will leave it
   * unchanged.
   */
  isCollapsed?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body34Properties: s.Shape<Body34> = {
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  isLinkSharingEnabled: s.optionalNullable(s.boolean()),
  isGuestAllowed: s.optionalNullable(s.boolean()),
  domainName: s.optionalNullable(s.string()),
  domainDiscovery: s.optionalNullable(s.boolean()),
  restrictEmailDomains: s.optionalNullable(s.boolean()),
  properties: s.optionalNullable(s.lazy(() => publicWorkspacePropertiesSchema)),
  isTrialPending: s.optionalNullable(s.boolean()),
  inviteCode: s.optionalNullable(s.string()),
  isCollapsed: s.optionalNullable(s.boolean()),
  _keysMap: {
    isLinkSharingEnabled: "is_link_sharing_enabled",
    isGuestAllowed: "is_guest_allowed",
    domainName: "domain_name",
    domainDiscovery: "domain_discovery",
    restrictEmailDomains: "restrict_email_domains",
    isTrialPending: "is_trial_pending",
    inviteCode: "invite_code",
    isCollapsed: "is_collapsed",
  },
};

export const body34InternalSchema: Schema<Body34> = s.object<Body34>(body34Properties, {
  additionalProperties: s.json(),
});

export const body34Schema: Schema<Body34> = s.lazySchema(() =>
  s.object<Body34>(
    {
      ...body34Properties,
      name: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
