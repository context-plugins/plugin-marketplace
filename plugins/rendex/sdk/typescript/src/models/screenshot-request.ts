import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockResourceTypeSchema, type BlockResourceType } from "./block-resource-type.js";
import { cookieSchema, type Cookie } from "./cookie.js";
import { deviceSchema, type Device } from "./device.js";
import { ExtractFormat, extractFormatSchema } from "./extract-format.js";
import { Format, formatSchema } from "./format.js";
import { pdfFormatSchema, type PdfFormat } from "./pdf-format.js";
import { pdfMarginSchema, type PdfMargin } from "./pdf-margin.js";
import { WaitUntil, waitUntilSchema } from "./wait-until.js";

/**
 * Provide exactly one of `url`, `html`, or `markdown` (mutually exclusive). If none is provided,
 * the request will fail with a validation error.
 */
export type ScreenshotRequest = {
  /** Webpage URL to capture (mutually exclusive with `html` and `markdown`) */
  url?: string;
  /** Raw HTML to render (up to 5 MB, mutually exclusive with `url` and `markdown`) */
  html?: string;
  /**
   * Markdown to render as styled HTML, then capture (up to 5 MB, mutually exclusive with `url` and
   * `html`)
   */
  markdown?: string;
  /**
   * Mustache template data object. When present, the `html` or `markdown` string is treated as a
   * logic-less Mustache template and rendered against `data` before capture. Valid only with `html`
   * or `markdown` — returns 400 if combined with `url`. Serialized size must not exceed 256 KB.
   * Syntax: `{{var}}` (HTML-escaped), `{{{var}}}` (raw), `{{#items}}…{{/items}}` (loop),
   * `{{^x}}…{{/x}}` (inverted section), `{{a.b}}` (nested access).
   */
  data?: Record<string, unknown>;
  /** Output format @default Format.Png */
  format?: Format;
  /** Viewport width in pixels @default 1280 */
  width?: number;
  /** Viewport height in pixels @default 800 */
  height?: number;
  /** Capture full scrollable page (capped at 16384px height) @default false */
  fullPage?: boolean;
  /** Image quality (JPEG and WebP only) */
  quality?: number;
  /** Wait milliseconds after page load before capture @default 0 */
  delay?: number;
  /** Emulate dark color scheme @default false */
  darkMode?: boolean;
  /** Device pixel ratio (2 for Retina) @default 2 */
  deviceScaleFactor?: number;
  /** Block ads, trackers, and chat widgets @default true */
  blockAds?: boolean;
  /** Resource types to block during page load */
  blockResourceTypes?: BlockResourceType[];
  /** CSS to inject into the page before capture */
  css?: string;
  /** JavaScript to execute on the page before capture */
  js?: string;
  /** Cookies to set before navigating to the page */
  cookies?: Cookie[];
  /** Custom HTTP headers to send with the page request */
  headers?: Record<string, string>;
  /** Custom User-Agent string */
  userAgent?: string;
  /** Navigation timeout in seconds @default 30 */
  timeout?: number;
  /** Page readiness condition before capture @default WaitUntil.Networkidle2 */
  waitUntil?: WaitUntil;
  /** CSS selector to wait for before capture */
  waitForSelector?: string;
  /** Return partial screenshot on timeout instead of failing @default true */
  bestAttempt?: boolean;
  /** CSS selector of element to capture instead of full page */
  selector?: string;
  /** Paper size for PDF output (only applies when `format` is `pdf`) */
  pdfFormat?: PdfFormat;
  /** Use landscape orientation for PDF output */
  pdfLandscape?: boolean;
  /** Include background colors and images in PDF output */
  pdfPrintBackground?: boolean;
  /** Scale factor for PDF rendering (0.1 to 2) */
  pdfScale?: number;
  /** Page margins for PDF output (CSS units, e.g. "1cm", "0.5in") */
  pdfMargin?: PdfMargin;
  /** ISO 3166-1 alpha-2 country code for geo-targeted rendering (Pro/Enterprise) */
  geo?: string;
  /** City for geo-targeted rendering (Pro/Enterprise) */
  geoCity?: string;
  /** State or region for geo-targeted rendering (Pro/Enterprise) */
  geoState?: string;
  /** Process the capture asynchronously (returns a `jobId` to poll) */
  async?: boolean;
  /**
   * URL to receive a webhook notification when the capture completes (Starter+ channel; Free/Basic
   * poll GET /v1/jobs/{jobId} instead).
   */
  webhookUrl?: string;
  /** Cache time-to-live in seconds (1 hour to 30 days) */
  cacheTtl?: number;
  /**
   * Device preset — sets viewport, device scale, and user agent in one parameter. Explicit
   * width/height/userAgent still win.
   */
  device?: Device;
  /**
   * CSS selectors to hide before capture (popups, sticky nav, chat bubbles). Never errors on a
   * miss.
   */
  hideSelectors?: string[];
  /**
   * Hide common cookie/consent walls (OneTrust, Cookiebot, Quantcast, …) via a curated CSS list.
   *
   * @default false
   */
  blockCookieBanners?: boolean;
  /**
   * Store the result in R2 and return `{url, expiresAt}` (a signed CDN-backed URL) instead of the
   * image bytes. Drop the URL into an `<img>`/`og:image`.
   *
   * @default false
   */
  hosted?: boolean;
  /**
   * Also return clean reader-mode content from the same render pass (use on `/v1/screenshot/json`;
   * the binary endpoint rejects it). Shape set by `extractFormat`.
   *
   * @default false
   */
  extract?: boolean;
  /** Shape of the extracted content when `extract` is true. @default ExtractFormat.Markdown */
  extractFormat?: ExtractFormat;
  /**
   * Downscale the output to this width (image formats only). Aspect ratio preserved when only one
   * dimension is set. Never upscales.
   */
  resizeWidth?: number;
  /** Downscale the output to this height (image formats only). */
  resizeHeight?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const screenshotRequestProperties: s.Shape<ScreenshotRequest> = {
  url: s.optional(s.string()),
  html: s.optional(s.string()),
  markdown: s.optional(s.string()),
  data: s.optional(s.record(s.string(), s.unknown())),
  format: s.defaulted(formatSchema, Format.Png),
  width: s.defaulted(s.int(), 1280),
  height: s.defaulted(s.int(), 800),
  fullPage: s.defaulted(s.boolean(), false),
  quality: s.optional(s.int()),
  delay: s.defaulted(s.int(), 0),
  darkMode: s.defaulted(s.boolean(), false),
  deviceScaleFactor: s.defaulted(s.float64(), 2),
  blockAds: s.defaulted(s.boolean(), true),
  blockResourceTypes: s.optional(s.array(s.lazy(() => blockResourceTypeSchema))),
  css: s.optional(s.string()),
  js: s.optional(s.string()),
  cookies: s.optional(s.array(s.lazy(() => cookieSchema))),
  headers: s.optional(s.record(s.string(), s.string())),
  userAgent: s.optional(s.string()),
  timeout: s.defaulted(s.int(), 30),
  waitUntil: s.defaulted(waitUntilSchema, WaitUntil.Networkidle2),
  waitForSelector: s.optional(s.string()),
  bestAttempt: s.defaulted(s.boolean(), true),
  selector: s.optional(s.string()),
  pdfFormat: s.optional(s.lazy(() => pdfFormatSchema)),
  pdfLandscape: s.optional(s.boolean()),
  pdfPrintBackground: s.optional(s.boolean()),
  pdfScale: s.optional(s.float64()),
  pdfMargin: s.optional(s.lazy(() => pdfMarginSchema)),
  geo: s.optional(s.string()),
  geoCity: s.optional(s.string()),
  geoState: s.optional(s.string()),
  async: s.optional(s.boolean()),
  webhookUrl: s.optional(s.string()),
  cacheTtl: s.optional(s.int()),
  device: s.optional(s.lazy(() => deviceSchema)),
  hideSelectors: s.optional(s.array(s.string())),
  blockCookieBanners: s.defaulted(s.boolean(), false),
  hosted: s.defaulted(s.boolean(), false),
  extract: s.defaulted(s.boolean(), false),
  extractFormat: s.defaulted(extractFormatSchema, ExtractFormat.Markdown),
  resizeWidth: s.optional(s.int()),
  resizeHeight: s.optional(s.int()),
};

export const screenshotRequestInternalSchema: Schema<ScreenshotRequest> = s.object<ScreenshotRequest>(
  screenshotRequestProperties,
  { additionalProperties: s.json() },
);

export const screenshotRequestSchema: Schema<ScreenshotRequest> = s.lazySchema(() =>
  s.object<ScreenshotRequest>(
    {
      ...screenshotRequestProperties,
      url: s.optional(s.string().check(s.url())),
      html: s.optional(s.string().check(s.maxLength(5242880))),
      markdown: s.optional(s.string().check(s.maxLength(5242880))),
      width: s.defaulted(s.int().check(s.gte(320), s.lte(3840)), 1280),
      height: s.defaulted(s.int().check(s.gte(240), s.lte(2160)), 800),
      quality: s.optional(s.int().check(s.gte(1), s.lte(100))),
      delay: s.defaulted(s.int().check(s.gte(0), s.lte(10000)), 0),
      deviceScaleFactor: s.defaulted(s.float64().check(s.gte(1), s.lte(3)), 2),
      css: s.optional(s.string().check(s.maxLength(51200))),
      js: s.optional(s.string().check(s.maxLength(51200))),
      userAgent: s.optional(s.string().check(s.maxLength(512))),
      timeout: s.defaulted(s.int().check(s.gte(5), s.lte(60)), 30),
      waitForSelector: s.optional(s.string().check(s.maxLength(500))),
      selector: s.optional(s.string().check(s.maxLength(500))),
      pdfScale: s.optional(s.float64().check(s.gte(0.1), s.lte(2))),
      geo: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
      geoCity: s.optional(s.string().check(s.maxLength(100))),
      geoState: s.optional(s.string().check(s.maxLength(100))),
      webhookUrl: s.optional(s.string().check(s.url())),
      cacheTtl: s.optional(s.int().check(s.gte(3600), s.lte(2592000))),
      hideSelectors: s.optional(s.array(s.string().check(s.maxLength(500))).check(s.maxLength(50))),
      resizeWidth: s.optional(s.int().check(s.gte(16), s.lte(3840))),
      resizeHeight: s.optional(s.int().check(s.gte(16), s.lte(2160))),
    },
    { additionalProperties: s.json() },
  ),
);
