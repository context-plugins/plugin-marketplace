import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { diffModeSchema, type DiffMode } from "./diff-mode.js";
import { lastChangeSchema, type LastChange } from "./last-change.js";
import {
  status1RendexRenderingWatchApiSchema,
  type Status1RendexRenderingWatchApi,
} from "./status1-rendex-rendering-watch-api.js";

/** A monitoring configuration. webhookUrl is redacted to its host on read. */
export type Watch = {
  id?: string;
  url?: string;
  /** Null when unset */
  name?: string;
  intervalMinutes?: number;
  diffMode?: DiffMode;
  /** 0..1 fraction */
  threshold?: number;
  renderParams?: Record<string, unknown>;
  aiSummary?: boolean;
  /** Redacted to host; null when no webhook channel */
  webhookUrl?: string;
  /** Null when unset */
  notifyEmail?: string;
  status?: Status1RendexRenderingWatchApi;
  /**
   * Short-lived signed URL of the watch's current baseline — the "before" image used in the next
   * change comparison; null until a baseline exists
   */
  baselineImageUrl?: string;
  baselineCapturedAt?: Date;
  lastRunAt?: Date;
  /** Null while paused */
  nextRunAt?: Date;
  lastChangedAt?: Date;
  /** completed | failed | null */
  lastStatus?: string;
  consecutiveFailures?: number;
  /** When the target last blocked the RendexWatch identity; null if never */
  uaBlockedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET
   * /v1/watches and GET /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no
   * follow-up call to /:id/runs). Null when the watch has never changed.
   */
  lastChange?: LastChange | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const watchProperties: s.Shape<Watch> = {
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  intervalMinutes: s.optional(s.int()),
  diffMode: s.optional(s.lazy(() => diffModeSchema)),
  threshold: s.optional(s.float64()),
  renderParams: s.optional(s.record(s.string(), s.unknown())),
  aiSummary: s.optional(s.boolean()),
  webhookUrl: s.optional(s.string()),
  notifyEmail: s.optional(s.string()),
  status: s.optional(s.lazy(() => status1RendexRenderingWatchApiSchema)),
  baselineImageUrl: s.optional(s.string()),
  baselineCapturedAt: s.optional(s.dateTime()),
  lastRunAt: s.optional(s.dateTime()),
  nextRunAt: s.optional(s.dateTime()),
  lastChangedAt: s.optional(s.dateTime()),
  lastStatus: s.optional(s.string()),
  consecutiveFailures: s.optional(s.int()),
  uaBlockedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  lastChange: s.optionalNullable(s.lazy(() => lastChangeSchema)),
};

export const watchInternalSchema: Schema<Watch> = s.object<Watch>(watchProperties, {
  additionalProperties: s.json(),
});

export const watchSchema: Schema<Watch> = s.lazySchema(() =>
  s.object<Watch>(
    {
      ...watchProperties,
      url: s.optional(s.string().check(s.url())),
      baselineImageUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
