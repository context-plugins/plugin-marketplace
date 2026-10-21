import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";
import { discoverMethod5Schema, type DiscoverMethod5 } from "./discover-method5.js";
import {
  discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttpSchema,
  type DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp,
} from "./discover-type-options-health-check-discovery-discover-type-http.js";
import {
  paginationTypeRestDiscoveryDiscoverTypeHttpSchema,
  type PaginationTypeRestDiscoveryDiscoverTypeHttp,
} from "./pagination-type-rest-discovery-discover-type-http.js";

export type RestDiscoveryDiscoverTypeHttp = {
  /** Discriminator value. */
  discoverType?: DiscoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttp;
  /**
   * URL to use for the Discover operation. Can be a constant URL, or a JavaScript expression to
   * derive the URL.
   */
  discoverUrl: string;
  /** Discover method */
  discoverMethod: DiscoverMethod5;
  /** Discover headers */
  discoverRequestHeaders?: CollectRequestParamConfRestCollectMethodGet[];
  /** Settings that control how the Collector paginates through Discover results. */
  pagination?: PaginationTypeRestDiscoveryDiscoverTypeHttp;
  /**
   * Path to field in the response object that contains discovery results (ex: level1.name). Leave
   * blank if the result is an array.
   */
  discoverDataField?: string;
  /** Explicitly set the discover response format. When disabled, best effort parsing is used. */
  enableStrictDiscoverParsing?: boolean;
  /** If 'Strict discover response parsing' parsing is enabled, provide the response format */
  discoverResponseFormat?: string;
  /** Format discover result with custom code */
  enableDiscoverCode?: boolean;
  /**
   * Custom JavaScript code to format the discover result through the __e variable which is a JSON
   * object or array containing the original discover results. The object or array passed should be
   * manipulated to contain the desired discover results, i.e.: __e['myResult'] = [{lat: -1.1234,
   * long: 2.345, zip: 11111},{lat: -1.235, long 2.346, zip: 22222}] or ['11111','22222']. Caution:
   * This function is evaluated in an unprotected context, allowing you to execute almost any
   * JavaScript code.
   */
  formatResultCode?: string;
  /**
   * Binds 'discoverUrl' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverUrl' at runtime.
   */
  templateDiscoverUrl?: string;
};

export const restDiscoveryDiscoverTypeHttpSchema: Schema<RestDiscoveryDiscoverTypeHttp> =
  s.object<RestDiscoveryDiscoverTypeHttp>({
    discoverType: s.optional(s.lazy(() => discoverTypeOptionsHealthCheckDiscoveryDiscoverTypeHttpSchema)),
    discoverUrl: s.string(),
    discoverMethod: discoverMethod5Schema,
    discoverRequestHeaders: s.optional(
      s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema)),
    ),
    pagination: s.optional(s.lazy(() => paginationTypeRestDiscoveryDiscoverTypeHttpSchema)),
    discoverDataField: s.optional(s.string()),
    enableStrictDiscoverParsing: s.optional(s.boolean()),
    discoverResponseFormat: s.optional(s.string()),
    enableDiscoverCode: s.optional(s.boolean()),
    formatResultCode: s.optional(s.string()),
    templateDiscoverUrl: s.optional(s.string()),
    _keysMap: {
      templateDiscoverUrl: "__template_discoverUrl",
    },
  });
