import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpSecurity = {
  threatScore?: number;
  isTor?: boolean;
  isProxy?: boolean;
  proxyProviderNames?: string[];
  proxyConfidenceScore?: number;
  proxyLastSeen?: string;
  isResidentialProxy?: boolean;
  isVpn?: boolean;
  vpnProviderNames?: string[];
  vpnConfidenceScore?: number;
  vpnLastSeen?: string;
  isRelay?: boolean;
  relayProviderName?: string;
  isAnonymous?: boolean;
  isKnownAttacker?: boolean;
  isBot?: boolean;
  isSpam?: boolean;
  isCloudProvider?: boolean;
  cloudProviderName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipSecuritySchema: Schema<IpSecurity> = s.object<IpSecurity>(
  {
    threatScore: s.optional(s.int()),
    isTor: s.optional(s.boolean()),
    isProxy: s.optional(s.boolean()),
    proxyProviderNames: s.optional(s.array(s.string())),
    proxyConfidenceScore: s.optional(s.int()),
    proxyLastSeen: s.optional(s.string()),
    isResidentialProxy: s.optional(s.boolean()),
    isVpn: s.optional(s.boolean()),
    vpnProviderNames: s.optional(s.array(s.string())),
    vpnConfidenceScore: s.optional(s.int()),
    vpnLastSeen: s.optional(s.string()),
    isRelay: s.optional(s.boolean()),
    relayProviderName: s.optional(s.string()),
    isAnonymous: s.optional(s.boolean()),
    isKnownAttacker: s.optional(s.boolean()),
    isBot: s.optional(s.boolean()),
    isSpam: s.optional(s.boolean()),
    isCloudProvider: s.optional(s.boolean()),
    cloudProviderName: s.optional(s.string()),
    _keysMap: {
      threatScore: "threat_score",
      isTor: "is_tor",
      isProxy: "is_proxy",
      proxyProviderNames: "proxy_provider_names",
      proxyConfidenceScore: "proxy_confidence_score",
      proxyLastSeen: "proxy_last_seen",
      isResidentialProxy: "is_residential_proxy",
      isVpn: "is_vpn",
      vpnProviderNames: "vpn_provider_names",
      vpnConfidenceScore: "vpn_confidence_score",
      vpnLastSeen: "vpn_last_seen",
      isRelay: "is_relay",
      relayProviderName: "relay_provider_name",
      isAnonymous: "is_anonymous",
      isKnownAttacker: "is_known_attacker",
      isBot: "is_bot",
      isSpam: "is_spam",
      isCloudProvider: "is_cloud_provider",
      cloudProviderName: "cloud_provider_name",
    },
  },
  { additionalProperties: s.json() },
);
