import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diffModeSchema, type DiffMode } from "./diff-mode.js";
import {
  watchRenderParamsInternalSchema,
  watchRenderParamsSchema,
  type WatchRenderParams,
} from "./watch-render-params.js";

/**
 * All fields optional. `webhookUrl` and `notifyEmail` additionally accept `null` to clear a
 * channel. Set `paused` true to pause, false to resume. Validated with a STRICT schema — any
 * unknown field is REJECTED with a 400 VALIDATION_ERROR, not silently ignored.
 *
 * `renderParams` is MERGED over the watch's existing render config: send only the knobs you want to
 * change. A scope-changing renderParams edit (e.g. `selector`, `fullPage`, `width`/`height`,
 * `device`) re-baselines on the next run, the same way a `url` change does.
 */
export type UpdateWatchRequest = {
  url?: string;
  name?: string;
  intervalMinutes?: number;
  diffMode?: DiffMode;
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
  aiSummary?: boolean;
  webhookUrl?: string;
  notifyEmail?: string;
  paused?: boolean;
};

const updateWatchRequestProperties: s.Shape<UpdateWatchRequest> = {
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  intervalMinutes: s.optional(s.int()),
  diffMode: s.optional(s.lazy(() => diffModeSchema)),
  threshold: s.optional(s.float64()),
  renderParams: s.optional(s.lazy(() => watchRenderParamsInternalSchema)),
  aiSummary: s.optional(s.boolean()),
  webhookUrl: s.optional(s.string()),
  notifyEmail: s.optional(s.string()),
  paused: s.optional(s.boolean()),
};

export const updateWatchRequestInternalSchema: Schema<UpdateWatchRequest> = s.object<UpdateWatchRequest>(
  updateWatchRequestProperties,
);

export const updateWatchRequestSchema: Schema<UpdateWatchRequest> = s.lazySchema(() =>
  s.object<UpdateWatchRequest>({
    ...updateWatchRequestProperties,
    url: s.optional(s.string().check(s.url())),
    name: s.optional(s.string().check(s.maxLength(120))),
    intervalMinutes: s.optional(s.int().check(s.gte(5), s.lte(43200))),
    threshold: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    renderParams: s.optional(s.lazy(() => watchRenderParamsSchema)),
    webhookUrl: s.optional(s.string().check(s.url())),
    notifyEmail: s.optional(s.string().check(s.email())),
  }),
);
