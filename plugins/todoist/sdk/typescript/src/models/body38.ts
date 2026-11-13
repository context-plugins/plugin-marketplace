import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicWorkspacePropertiesSchema,
  type PublicWorkspaceProperties,
} from "./public-workspace-properties.js";

export type Body38 = {
  /** Name of the workspace. */
  name?: string | null;
  /** Description of the workspace. */
  description?: string | null;
  /** Whether link sharing is enabled for the workspace. @default true */
  isLinkSharingEnabled?: boolean;
  /** Whether guests are allowed in the workspace. @default true */
  isGuestAllowed?: boolean;
  /** Workspace email domain. */
  domainName?: string | null;
  /** Whether users with matching email domains can discover this workspace. @default false */
  domainDiscovery?: boolean;
  /** Whether workspace invites are restricted to workspace domain. @default false */
  restrictEmailDomains?: boolean;
  /** Workspace properties. */
  properties?: PublicWorkspaceProperties | null;
  /** Whether the workspace is waiting for trial confirmation. @default false */
  isTrialPending?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body38Properties: s.Shape<Body38> = {
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  isLinkSharingEnabled: s.defaulted(s.boolean(), true),
  isGuestAllowed: s.defaulted(s.boolean(), true),
  domainName: s.optionalNullable(s.string()),
  domainDiscovery: s.defaulted(s.boolean(), false),
  restrictEmailDomains: s.defaulted(s.boolean(), false),
  properties: s.optionalNullable(s.lazy(() => publicWorkspacePropertiesSchema)),
  isTrialPending: s.defaulted(s.boolean(), false),
  _keysMap: {
    isLinkSharingEnabled: "is_link_sharing_enabled",
    isGuestAllowed: "is_guest_allowed",
    domainName: "domain_name",
    domainDiscovery: "domain_discovery",
    restrictEmailDomains: "restrict_email_domains",
    isTrialPending: "is_trial_pending",
  },
};

export const body38InternalSchema: Schema<Body38> = s.object<Body38>(body38Properties, {
  additionalProperties: s.json(),
});

export const body38Schema: Schema<Body38> = s.lazySchema(() =>
  s.object<Body38>(
    {
      ...body38Properties,
      name: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
