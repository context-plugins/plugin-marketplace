import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { browserExtensionViewSchema, type BrowserExtensionView } from "./browser-extension-view.js";
import { browserSessionStatus2Schema, type BrowserSessionStatus2 } from "./browser-session-status2.js";
import { agentSessionIdSchema, type AgentSessionId } from "./unions/agent-session-id.js";
import { cdpUrlSchema, type CdpUrl } from "./unions/cdp-url.js";
import { finishedAtSchema, type FinishedAt } from "./unions/finished-at.js";
import { liveUrlSchema, type LiveUrl } from "./unions/live-url.js";
import { recordingUrlSchema, type RecordingUrl } from "./unions/recording-url.js";

/** View model for representing a browser session. */
export type BrowserSessionView = {
  /** Unique identifier for the session */
  id: string;
  /** Current status of the session (active/stopped) */
  status: BrowserSessionStatus2;
  /** URL where the browser can be viewed live in real-time */
  liveUrl?: LiveUrl;
  /** Chrome DevTools Protocol URL for browser automation */
  cdpUrl?: CdpUrl;
  /** Timestamp when the session will timeout */
  timeoutAt: Date;
  /** Timestamp when the session was created and started */
  startedAt: Date;
  /** Timestamp when the session was stopped (None if still active) */
  finishedAt?: FinishedAt;
  /** Amount of proxy data used in MB @default "0" */
  proxyUsedMb?: string;
  /** Cost of proxy usage in USD @default "0" */
  proxyCost?: string;
  /** Cost of browser session hosting in USD @default "0" */
  browserCost?: string;
  /** ID of the agent session that created this browser (None for standalone BaaS sessions) */
  agentSessionId?: AgentSessionId;
  /**
   * Presigned URL to download the session recording, if recording was enabled. Only populated on
   * GET /api/v2/browsers/{session_id}: the upload starts when the browser stops, so it is never
   * ready in the stop response.
   */
  recordingUrl?: RecordingUrl;
  /**
   * False when a recording can never appear for this session: recording was disabled, or the
   * browser stopped long enough ago that the upload is not coming. Only ever false from proof, so a
   * failed recording lookup leaves it true. Clients polling for `recordingUrl` must stop when this
   * is false.
   *
   * @default true
   */
  recordingAvailable?: boolean;
  /** Caller-supplied labels set when the browser was created. */
  metadata?: Record<string, string>;
  /** Extensions installed in the browser, in the order of `extensionIds`. */
  extensions?: BrowserExtensionView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const browserSessionViewProperties: s.Shape<BrowserSessionView> = {
  id: s.string(),
  status: browserSessionStatus2Schema,
  liveUrl: s.optional(s.lazy(() => liveUrlSchema)),
  cdpUrl: s.optional(s.lazy(() => cdpUrlSchema)),
  timeoutAt: s.dateTime(),
  startedAt: s.dateTime(),
  finishedAt: s.optional(s.lazy(() => finishedAtSchema)),
  proxyUsedMb: s.defaulted(s.string(), "0"),
  proxyCost: s.defaulted(s.string(), "0"),
  browserCost: s.defaulted(s.string(), "0"),
  agentSessionId: s.optional(s.lazy(() => agentSessionIdSchema)),
  recordingUrl: s.optional(s.lazy(() => recordingUrlSchema)),
  recordingAvailable: s.defaulted(s.boolean(), true),
  metadata: s.optional(s.record(s.string(), s.string())),
  extensions: s.optional(s.array(s.lazy(() => browserExtensionViewSchema))),
};

export const browserSessionViewInternalSchema: Schema<BrowserSessionView> = s.object<BrowserSessionView>(
  browserSessionViewProperties,
  { additionalProperties: s.json() },
);

export const browserSessionViewSchema: Schema<BrowserSessionView> = s.lazySchema(() =>
  s.object<BrowserSessionView>(
    {
      ...browserSessionViewProperties,
      proxyUsedMb: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
      proxyCost: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
      browserCost: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
    },
    { additionalProperties: s.json() },
  ),
);
