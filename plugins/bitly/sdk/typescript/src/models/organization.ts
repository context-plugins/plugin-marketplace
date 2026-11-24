import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requireSsoSchema, type RequireSso } from "./require-sso.js";
import { require2FaSchema, type Require2Fa } from "./require2-fa.js";

export type Organization = {
  references?: Record<string, string>;
  name: string;
  isActive: boolean;
  guid: string;
  tier: string;
  tierFamily: string;
  tierDisplayName: string;
  role: string;
  created: string;
  modified: string;
  bsds: string[];
  /**
   * SSO authentication requirement for this organization. Possible values: "none", "any". Omitted
   * when no auth requirements are configured.
   */
  requireSso?: RequireSso;
  /**
   * Two-factor authentication requirement for this organization. Possible values: "none", "sms".
   * Omitted when no auth requirements are configured.
   */
  require2Fa?: Require2Fa;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    name: s.string(),
    isActive: s.boolean(),
    guid: s.string(),
    tier: s.string(),
    tierFamily: s.string(),
    tierDisplayName: s.string(),
    role: s.string(),
    created: s.string(),
    modified: s.string(),
    bsds: s.array(s.string()),
    requireSso: s.optional(s.lazy(() => requireSsoSchema)),
    require2Fa: s.optional(s.lazy(() => require2FaSchema)),
    _keysMap: {
      isActive: "is_active",
      tierFamily: "tier_family",
      tierDisplayName: "tier_display_name",
      requireSso: "require_sso",
      require2Fa: "require_2fa",
    },
  },
  { additionalProperties: s.json() },
);
