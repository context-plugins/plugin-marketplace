import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceRendexRenderingWatchApiSchema,
  type DeviceRendexRenderingWatchApi,
} from "./device-rendex-rendering-watch-api.js";
import {
  FormatRendexRenderingWatchApi,
  formatRendexRenderingWatchApiSchema,
} from "./format-rendex-rendering-watch-api.js";
import { ignoreRegionInternalSchema, ignoreRegionSchema, type IgnoreRegion } from "./ignore-region.js";
import { UaMode, uaModeSchema } from "./ua-mode.js";
import {
  WaitUntilRendexRenderingWatchApi,
  waitUntilRendexRenderingWatchApiSchema,
} from "./wait-until-rendex-rendering-watch-api.js";

/**
 * Render knobs applied on every check — a subset of the screenshot capture params, stored on the
 * watch and fed to the renderer each run. Inline source params (`url`/`html`/`markdown`/ `data`)
 * and credential knobs (`cookies`/`headers`/`css`/`js`) are NOT accepted here; the watch's target
 * is the top-level `url`. Validated with a STRICT schema: any capture param outside the list below
 * (e.g. `quality`, `css`, `js`, `resize*`, `pdf*`, `userAgent`, `cookies`, `headers`) is REJECTED
 * with a 400 VALIDATION_ERROR — extras are NOT silently ignored.
 */
export type WatchRenderParams = {
  /**
   * A pdf cannot be visually diffed — pair it with diffMode `text`.
   *
   * @default FormatRendexRenderingWatchApi.Png
   */
  format?: FormatRendexRenderingWatchApi;
  /** @default 1280 */
  width?: number;
  /** @default 800 */
  height?: number;
  /**
   * Defaults to true for watches (overrides the screenshot default of false) so the whole page is
   * monitored — a viewport-only capture would miss changes below the fold. Set false (or use a
   * selector) to scope down on purpose.
   *
   * @default true
   */
  fullPage?: boolean;
  device?: DeviceRendexRenderingWatchApi;
  /** @default 2 */
  deviceScaleFactor?: number;
  /** @default false */
  darkMode?: boolean;
  /** @default true */
  blockAds?: boolean;
  /** @default false */
  blockCookieBanners?: boolean;
  /** Remove these elements before capture */
  hideSelectors?: string[];
  /** @default WaitUntilRendexRenderingWatchApi.Networkidle2 */
  waitUntil?: WaitUntilRendexRenderingWatchApi;
  /** Extra wait in milliseconds after the page is ready @default 0 */
  delay?: number;
  /** Navigation timeout in seconds @default 30 */
  timeout?: number;
  /**
   * Pro+ — 2-letter ISO 3166-1 alpha-2 country code (e.g. `US`, `GB`; case-insensitive, upper-cased
   * server-side) to render from. Cannot be combined with a text diffMode.
   */
  geo?: string;
  geoCity?: string;
  geoState?: string;
  /**
   * Capture and diff ONLY this CSS element — watch just one price, banner, or section instead of
   * the whole page. Visual-first (in text mode the extracted text is full-page).
   */
  selector?: string;
  /**
   * Pixel rectangles masked in BOTH captures before the visual diff — silence dynamic zones (an ad
   * slot, a clock) so they never trip a change. Visual mode only.
   */
  ignoreRegions?: IgnoreRegion[];
  /**
   * Substrings or `/regex/flags` patterns stripped from BOTH texts before the text diff — silence
   * boilerplate (timestamps, view counts, session tokens). Applies to text/both modes.
   */
  ignoreText?: string[];
  /**
   * Minimum added + removed characters for a text change to count — ignore tiny edits below the
   * size you care about.
   */
  minTextChars?: number;
  /**
   * While the page text contains any of these markers (e.g. "Out of stock", "Loading"), the run is
   * treated as unchanged — no alert, no baseline drift — until the marker clears.
   */
  suppressWhilePresent?: string[];
  /**
   * How the monitor presents its User-Agent. `auto` (default) identifies as RendexWatch and retries
   * once with a standard browser identity if the page looks blocked; `identify` always identifies
   * as RendexWatch and never falls back; `stealth` always presents a standard browser identity. See
   * https://rendex.dev/bot.
   *
   * @default UaMode.Auto
   */
  uaMode?: UaMode;
};

const watchRenderParamsProperties: s.Shape<WatchRenderParams> = {
  format: s.defaulted(formatRendexRenderingWatchApiSchema, FormatRendexRenderingWatchApi.Png),
  width: s.defaulted(s.int(), 1280),
  height: s.defaulted(s.int(), 800),
  fullPage: s.defaulted(s.boolean(), true),
  device: s.optional(s.lazy(() => deviceRendexRenderingWatchApiSchema)),
  deviceScaleFactor: s.defaulted(s.float64(), 2),
  darkMode: s.defaulted(s.boolean(), false),
  blockAds: s.defaulted(s.boolean(), true),
  blockCookieBanners: s.defaulted(s.boolean(), false),
  hideSelectors: s.optional(s.array(s.string())),
  waitUntil: s.defaulted(
    waitUntilRendexRenderingWatchApiSchema,
    WaitUntilRendexRenderingWatchApi.Networkidle2,
  ),
  delay: s.defaulted(s.int(), 0),
  timeout: s.defaulted(s.int(), 30),
  geo: s.optional(s.string()),
  geoCity: s.optional(s.string()),
  geoState: s.optional(s.string()),
  selector: s.optional(s.string()),
  ignoreRegions: s.optional(s.array(s.lazy(() => ignoreRegionInternalSchema))),
  ignoreText: s.optional(s.array(s.string())),
  minTextChars: s.optional(s.int()),
  suppressWhilePresent: s.optional(s.array(s.string())),
  uaMode: s.defaulted(uaModeSchema, UaMode.Auto),
};

export const watchRenderParamsInternalSchema: Schema<WatchRenderParams> =
  s.object<WatchRenderParams>(watchRenderParamsProperties);

export const watchRenderParamsSchema: Schema<WatchRenderParams> = s.lazySchema(() =>
  s.object<WatchRenderParams>({
    ...watchRenderParamsProperties,
    width: s.defaulted(s.int().check(s.gte(320), s.lte(3840)), 1280),
    height: s.defaulted(s.int().check(s.gte(240), s.lte(2160)), 800),
    deviceScaleFactor: s.defaulted(s.float64().check(s.gte(1), s.lte(3)), 2),
    hideSelectors: s.optional(s.array(s.string().check(s.maxLength(500))).check(s.maxLength(50))),
    delay: s.defaulted(s.int().check(s.gte(0), s.lte(10000)), 0),
    timeout: s.defaulted(s.int().check(s.gte(5), s.lte(60)), 30),
    geo: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
    selector: s.optional(s.string().check(s.maxLength(500))),
    ignoreRegions: s.optional(s.array(s.lazy(() => ignoreRegionSchema)).check(s.maxLength(20))),
    ignoreText: s.optional(s.array(s.string().check(s.maxLength(500))).check(s.maxLength(50))),
    minTextChars: s.optional(s.int().check(s.gte(0), s.lte(100000))),
    suppressWhilePresent: s.optional(s.array(s.string().check(s.maxLength(500))).check(s.maxLength(20))),
  }),
);
