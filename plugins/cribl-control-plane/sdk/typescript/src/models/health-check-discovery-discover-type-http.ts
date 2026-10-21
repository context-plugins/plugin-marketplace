import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authRequestHeaderConfHealthCheckAuthenticationLoginSchema,
  type AuthRequestHeaderConfHealthCheckAuthenticationLogin,
} from "./auth-request-header-conf-health-check-authentication-login.js";
import { discoverMethodSchema, type DiscoverMethod } from "./discover-method.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttpSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp,
} from "./discover-type-options-health-check-discovery-discover-type-http.js";

export type HealthCheckDiscoveryDiscoverTypeHttp = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp;
  /** Expression to derive URL to use for the Discover operation (can be a constant). */
  discoverUrl: string;
  /** Discover HTTP method. */
  discoverMethod: DiscoverMethod;
  /** Optional discover request headers. */
  discoverRequestHeaders?: AuthRequestHeaderConfHealthCheckAuthenticationLogin[];
  /**
   * Path to field in the response object which contains discover results (e.g.: level1.name), leave
   * blank if the result is an array.
   */
  discoverDataField?: string;
  /**
   * Binds 'discoverUrl' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverUrl' at runtime.
   */
  templateDiscoverUrl?: string;
  /**
   * Binds 'discoverDataField' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverDataField' at runtime.
   */
  templateDiscoverDataField?: string;
};

export const healthCheckDiscoveryDiscoverTypeHttpSchema: Schema<HealthCheckDiscoveryDiscoverTypeHttp> =
  s.object<HealthCheckDiscoveryDiscoverTypeHttp>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttpSchema)),
    discoverUrl: s.string(),
    discoverMethod: discoverMethodSchema,
    discoverRequestHeaders: s.optional(
      s.array(s.lazy(() => authRequestHeaderConfHealthCheckAuthenticationLoginSchema)),
    ),
    discoverDataField: s.optional(s.string()),
    templateDiscoverUrl: s.optional(s.string()),
    templateDiscoverDataField: s.optional(s.string()),
    _keysMap: {
      templateDiscoverUrl: "__template_discoverUrl",
      templateDiscoverDataField: "__template_discoverDataField",
    },
  });
