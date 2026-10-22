import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authRequestHeaderConfHealthCheckAuthenticationLoginSchema,
  type AuthRequestHeaderConfHealthCheckAuthenticationLogin,
} from "./auth-request-header-conf-health-check-authentication-login.js";
import { discoverMethodSchema, type DiscoverMethod } from "./discover-method.js";
import { discoverTypeSchema, type DiscoverType } from "./discover-type.js";

/** Settings that control how the Collector discovers Collect tasks. */
export type Discovery = {
  /**
   * Defines how task discovery will be performed. Use None to skip the discovery. Use HTTP Request
   * to make a REST call to discover tasks. Use Item List to enumerate items for collect to
   * retrieve. Use JSON Response to manually define discover tasks as a JSON array of objects. Each
   * entry returned by the discover operation will result in a collect task.
   */
  discoverType: DiscoverType;
  /** Expression to derive URL to use for the Discover operation (can be a constant). */
  discoverUrl?: string;
  /**
   * Binds 'discoverUrl' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverUrl' at runtime.
   */
  templateDiscoverUrl?: string;
  /** Discover HTTP method. */
  discoverMethod?: DiscoverMethod;
  /** Optional discover request headers. */
  discoverRequestHeaders?: AuthRequestHeaderConfHealthCheckAuthenticationLogin[];
  /**
   * Path to field in the response object which contains discover results (e.g.: level1.name), leave
   * blank if the result is an array.
   */
  discoverDataField?: string;
  /**
   * Binds 'discoverDataField' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverDataField' at runtime.
   */
  templateDiscoverDataField?: string;
  /**
   * Allows hard-coding the Discover result. Must be a JSON object. Works with the Discover Data
   * field.
   */
  manualDiscoverResult?: string;
  /**
   * Comma-separated list of items to return from the Discover task. Each item returned will
   * generate a collect task, and can be referenced using `${id}` in the collect URL, headers, or
   * parameters.
   */
  itemList?: string[];
};

export const discoverySchema: Schema<Discovery> = s.object<Discovery>({
  discoverType: discoverTypeSchema,
  discoverUrl: s.optional(s.string()),
  templateDiscoverUrl: s.optional(s.string()),
  discoverMethod: s.optional(s.lazy(() => discoverMethodSchema)),
  discoverRequestHeaders: s.optional(
    s.array(s.lazy(() => authRequestHeaderConfHealthCheckAuthenticationLoginSchema)),
  ),
  discoverDataField: s.optional(s.string()),
  templateDiscoverDataField: s.optional(s.string()),
  manualDiscoverResult: s.optional(s.string()),
  itemList: s.optional(s.array(s.string())),
  _keysMap: {
    templateDiscoverUrl: "__template_discoverUrl",
    templateDiscoverDataField: "__template_discoverDataField",
  },
});
