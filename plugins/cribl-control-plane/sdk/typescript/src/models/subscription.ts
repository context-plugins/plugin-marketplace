import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format3Schema, type Format3 } from "./format3.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { queryBuilderModeSchema, type QueryBuilderMode } from "./query-builder-mode.js";
import { querySchema, type Query } from "./query.js";

export type Subscription = {
  /** Subscription name */
  subscriptionName: string;
  /**
   * Version UUID for this subscription. If any subscription parameters are modified, this value
   * will change.
   */
  version?: string;
  /** Content format in which the endpoint should deliver events */
  contentFormat: Format3;
  /** Maximum time (in seconds) between endpoint checkins before considering it unavailable */
  heartbeatInterval: number;
  /**
   * Interval (in seconds) over which the endpoint should collect events before sending them to
   * Stream
   */
  batchTimeout: number;
  /**
   * Newly subscribed endpoints will send previously existing events. Disable to receive new events
   * only.
   */
  readExistingEvents?: boolean;
  /**
   * Keep track of which events have been received, resuming from that point after a
   * re-subscription. This setting takes precedence over 'Read existing events'. See [Cribl
   * Docs](https://docs.cribl.io/stream/sources-wef/#subscriptions) for more details.
   */
  sendBookmarks?: boolean;
  /** Receive compressed events from the source */
  compress?: boolean;
  /**
   * The DNS names of the endpoints that should forward these events. You may use wildcards, such as
   * *.mydomain.com
   */
  targets: string[];
  /**
   * The RFC-3066 locale the Windows clients should use when sending events. Defaults to "en-US".
   */
  locale?: string;
  /** Query builder mode */
  querySelector?: QueryBuilderMode;
  /** Fields to add to events ingested under this subscription */
  metadata?: MetadataConfInputCollection[];
  /** Queries */
  queries?: Query[];
  /** The XPath query to use for selecting events */
  xmlQuery?: string;
};

export const subscriptionSchema: Schema<Subscription> = s.object<Subscription>({
  subscriptionName: s.string(),
  version: s.optional(s.string()),
  contentFormat: format3Schema,
  heartbeatInterval: s.float64(),
  batchTimeout: s.float64(),
  readExistingEvents: s.optional(s.boolean()),
  sendBookmarks: s.optional(s.boolean()),
  compress: s.optional(s.boolean()),
  targets: s.array(s.string()),
  locale: s.optional(s.string()),
  querySelector: s.optional(s.lazy(() => queryBuilderModeSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  queries: s.optional(s.array(s.lazy(() => querySchema))),
  xmlQuery: s.optional(s.string()),
});
