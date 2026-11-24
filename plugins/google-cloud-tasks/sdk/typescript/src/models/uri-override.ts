import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pathOverride2Schema, type PathOverride2 } from "./path-override2.js";
import { queryOverride1Schema, type QueryOverride1 } from "./query-override1.js";
import { schemeSchema, type Scheme } from "./scheme.js";
import { uriOverrideEnforceModeSchema, type UriOverrideEnforceMode } from "./uri-override-enforce-mode.js";

/**
 * URI Override. When specified, all the HTTP tasks inside the queue will be partially or fully
 * overridden depending on the configured values.
 */
export type UriOverride = {
  /**
   * Port override. When specified, replaces the port part of the task URI. For instance, for a URI
   * "https://www.example.com/example" and port=123, the overridden URI becomes
   * "https://www.example.com:123/example". Note that the port value must be a positive integer.
   * Setting the port to 0 (Zero) clears the URI port.
   */
  port?: string;
  /**
   * Scheme override. When specified, the task URI scheme is replaced by the provided value (HTTP or
   * HTTPS).
   */
  scheme?: Scheme;
  /**
   * URI query. When specified, replaces the query part of the task URI. Setting the query value to
   * an empty string clears the URI query segment.
   */
  queryOverride?: QueryOverride1;
  /**
   * URI Override Enforce Mode When specified, determines the Target UriOverride mode. If not
   * specified, it defaults to ALWAYS.
   */
  uriOverrideEnforceMode?: UriOverrideEnforceMode;
  /**
   * URI path. When specified, replaces the existing path of the task URL. Setting the path value to
   * an empty string clears the URI path segment.
   */
  pathOverride?: PathOverride2;
  /**
   * Host override. When specified, replaces the host part of the task URL. For example, if the task
   * URL is "https://www.google.com," and host value is set to "example.net", the overridden URI
   * will be changed to "https://example.net." Host value cannot be an empty string
   * (INVALID_ARGUMENT).
   */
  host?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const uriOverrideSchema: Schema<UriOverride> = s.object<UriOverride>(
  {
    port: s.optional(s.string()),
    scheme: s.optional(s.lazy(() => schemeSchema)),
    queryOverride: s.optional(s.lazy(() => queryOverride1Schema)),
    uriOverrideEnforceMode: s.optional(s.lazy(() => uriOverrideEnforceModeSchema)),
    pathOverride: s.optional(s.lazy(() => pathOverride2Schema)),
    host: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
