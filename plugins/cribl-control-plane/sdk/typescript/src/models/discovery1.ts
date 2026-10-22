import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";
import { discoverMethod5Schema, type DiscoverMethod5 } from "./discover-method5.js";
import { discoverType1Schema, type DiscoverType1 } from "./discover-type1.js";
import {
  paginationTypeRestDiscoveryDiscoverTypeHttpSchema,
  type PaginationTypeRestDiscoveryDiscoverTypeHttp,
} from "./pagination-type-rest-discovery-discover-type-http.js";

/** Settings that control how the Collector discovers Collect tasks. */
export type Discovery1 = {
  /**
   * Defines how task discovery will be performed. Each entry returned by the Discover operation
   * will result in a Collect task.
   */
  discoverType: DiscoverType1;
  /**
   * URL to use for the Discover operation. Can be a constant URL, or a JavaScript expression to
   * derive the URL.
   */
  discoverUrl?: string;
  /**
   * Binds 'discoverUrl' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'discoverUrl' at runtime.
   */
  templateDiscoverUrl?: string;
  /** Discover method */
  discoverMethod?: DiscoverMethod5;
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
  /** Format discover result with custom code */
  enableDiscoverCode?: boolean;
  /**
   * Allows hard-coding the Discover result. Must be a JSON object or array. Works with Discover
   * data field.
   */
  manualDiscoverResult?: string;
  /**
   * Comma-separated list of items to return from the Discover task. Each item returned generates a
   * Collect task and can be referenced using `${id}` in the Collect URL, headers, or parameters.
   */
  itemList?: string[];
};

export const discovery1Schema: Schema<Discovery1> = s.object<Discovery1>({
  discoverType: discoverType1Schema,
  discoverUrl: s.optional(s.string()),
  templateDiscoverUrl: s.optional(s.string()),
  discoverMethod: s.optional(s.lazy(() => discoverMethod5Schema)),
  discoverRequestHeaders: s.optional(
    s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema)),
  ),
  pagination: s.optional(s.lazy(() => paginationTypeRestDiscoveryDiscoverTypeHttpSchema)),
  discoverDataField: s.optional(s.string()),
  enableStrictDiscoverParsing: s.optional(s.boolean()),
  enableDiscoverCode: s.optional(s.boolean()),
  manualDiscoverResult: s.optional(s.string()),
  itemList: s.optional(s.array(s.string())),
  _keysMap: {
    templateDiscoverUrl: "__template_discoverUrl",
  },
});
