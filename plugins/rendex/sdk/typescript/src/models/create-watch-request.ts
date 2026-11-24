import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { DiffMode1, diffMode1Schema } from "./diff-mode1.js";
import {
  watchRenderParamsInternalSchema,
  watchRenderParamsSchema,
  type WatchRenderParams,
} from "./watch-render-params.js";

/**
 * Validated with a STRICT schema — any field outside the list below is REJECTED with a 400
 * VALIDATION_ERROR, not silently ignored. Render knobs go under `renderParams` (also strict).
 */
export type CreateWatchRequest = {
  /** The page to monitor */
  url: string;
  /** Optional label */
  name?: string;
  /**
   * Check frequency in minutes. The accepted minimum is your plan's floor — Free 1440 (daily),
   * Starter 180 (3h), Pro 30, Enterprise 5. A faster value returns 403 WATCH_INTERVAL_TOO_FAST.
   *
   * @default 1440
   */
  intervalMinutes?: number;
  /**
   * How changes are detected. Default `both` = a pixel diff (with a highlighted overlay) AND a
   * full-page text diff, alerting on either — catches any change, visual or text. `visual` or
   * `text` narrow to a single signal. (`text`/`both` extract the full visible page text, not just
   * the article body.)
   *
   * @default DiffMode1.Both
   */
  diffMode?: DiffMode1;
  /**
   * Visual sensitivity (0..1). Low (default 0.01) alerts on ANY change, including a small one on a
   * long page (a changed-region test, not a whole-page pixel ratio). `0.06`+ = only MAJOR visual
   * changes (whole-page ratio). Does not affect text detection.
   *
   * @default 0.01
   */
  threshold?: number;
  /**
   * Render knobs applied on every check — a subset of the screenshot capture params, stored on the
   * watch and fed to the renderer each run. Inline source params (`url`/`html`/`markdown`/ `data`)
   * and credential knobs (`cookies`/`headers`/`css`/`js`) are NOT accepted here; the watch's target
   * is the top-level `url`. Validated with a STRICT schema: any capture param outside the list
   * below (e.g. `quality`, `css`, `js`, `resize*`, `pdf*`, `userAgent`, `cookies`, `headers`) is
   * REJECTED with a 400 VALIDATION_ERROR — extras are NOT silently ignored.
   */
  renderParams?: WatchRenderParams;
  /**
   * Pro+ — opt in to an AI-written one-sentence "what changed" summary on each detected change. Off
   * by default. Every change already gets a free templated summary regardless of this flag;
   * enabling it upgrades a text change's summary to a Workers-AI sentence.
   *
   * @default false
   */
  aiSummary?: boolean;
  /**
   * Starter+ — HMAC-signed change-webhook target. Delivered payload: the WatchWebhookEvent schema.
   */
  webhookUrl?: string;
  /**
   * Any plan — send change alerts here (defaults to your account email if omitted). Anti-abuse:
   * must be your OWN account email; any other address is rejected with 400 VALIDATION_ERROR.
   */
  notifyEmail?: string;
  /**
   * Create the watch paused (no baseline capture or charge until resumed). Paused watches still
   * count toward your plan's watch limit.
   *
   * @default false
   */
  paused?: boolean;
};

const createWatchRequestProperties: s.Shape<CreateWatchRequest> = {
  url: s.string(),
  name: s.optional(s.string()),
  intervalMinutes: s.defaulted(s.int(), 1440),
  diffMode: s.defaulted(diffMode1Schema, DiffMode1.Both),
  threshold: s.defaulted(s.float64(), 0.01),
  renderParams: s.optional(s.lazy(() => watchRenderParamsInternalSchema)),
  aiSummary: s.defaulted(s.boolean(), false),
  webhookUrl: s.optional(s.string()),
  notifyEmail: s.optional(s.string()),
  paused: s.defaulted(s.boolean(), false),
};

export const createWatchRequestInternalSchema: Schema<CreateWatchRequest> = s.object<CreateWatchRequest>(
  createWatchRequestProperties,
);

export const createWatchRequestSchema: Schema<CreateWatchRequest> = s.lazySchema(() =>
  s.object<CreateWatchRequest>({
    ...createWatchRequestProperties,
    url: s.string().check(s.url()),
    name: s.optional(s.string().check(s.maxLength(120))),
    intervalMinutes: s.defaulted(s.int().check(s.gte(5), s.lte(43200)), 1440),
    threshold: s.defaulted(s.float64().check(s.gte(0), s.lte(1)), 0.01),
    renderParams: s.optional(s.lazy(() => watchRenderParamsSchema)),
    webhookUrl: s.optional(s.string().check(s.url())),
    notifyEmail: s.optional(s.string().check(s.email())),
  }),
);
