import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { browserExtensionViewSchema, type BrowserExtensionView } from "./browser-extension-view.js";
import { browserSessionStatus2Schema, type BrowserSessionStatus2 } from "./browser-session-status2.js";
import { agentSessionIdSchema, type AgentSessionId } from "./unions/agent-session-id.js";
import { cdpUrlSchema, type CdpUrl } from "./unions/cdp-url.js";
import { finishedAtSchema, type FinishedAt } from "./unions/finished-at.js";
import { liveUrlSchema, type LiveUrl } from "./unions/live-url.js";
import { recordingUrl1Schema, type RecordingUrl1 } from "./unions/recording-url1.js";

/** View model for representing a browser session in list views. */
export type BrowserSessionItemView = {
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
   * Presigned URL to download the session recording. Only populated on `GET /api/v2/browsers/{id}`;
   * always `null` in list responses.
   */
  recordingUrl?: RecordingUrl1;
  /** Caller-supplied labels set when the browser was created. */
  metadata?: Record<string, string>;
  /** Extensions installed in the browser, in the order of `extensionIds`. */
  extensions?: BrowserExtensionView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const browserSessionItemViewProperties: s.Shape<BrowserSessionItemView> = {
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
  recordingUrl: s.optional(s.lazy(() => recordingUrl1Schema)),
  metadata: s.optional(s.record(s.string(), s.string())),
  extensions: s.optional(s.array(s.lazy(() => browserExtensionViewSchema))),
};

export const browserSessionItemViewInternalSchema: Schema<BrowserSessionItemView> =
  s.object<BrowserSessionItemView>(browserSessionItemViewProperties, { additionalProperties: s.json() });

export const browserSessionItemViewSchema: Schema<BrowserSessionItemView> = s.lazySchema(() =>
  s.object<BrowserSessionItemView>(
    {
      ...browserSessionItemViewProperties,
      proxyUsedMb: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
      proxyCost: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
      browserCost: s.defaulted(s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")), "0"),
    },
    { additionalProperties: s.json() },
  ),
);
