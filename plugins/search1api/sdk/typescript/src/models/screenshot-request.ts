import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Animations, animationsSchema } from "./animations.js";
import { ColorScheme, colorSchemeSchema } from "./color-scheme.js";
import { Format, formatSchema } from "./format.js";
import { viewportInternalSchema, viewportSchema, type Viewport } from "./viewport.js";
import { WaitUntil, waitUntilSchema } from "./wait-until.js";

export type ScreenshotRequest = {
  url: string;
  /** @default Format.Png */
  format?: Format;
  /** @default false */
  fullPage?: boolean;
  viewport?: Viewport;
  /** @default WaitUntil.Load */
  waitUntil?: WaitUntil;
  waitForSelector?: string;
  selector?: string;
  /** @default 0 */
  delayMs?: number;
  /** @default 20000 */
  timeoutMs?: number;
  quality?: number;
  /** @default false */
  omitBackground?: boolean;
  /** @default ColorScheme.Light */
  colorScheme?: ColorScheme;
  /** @default Animations.Disabled */
  animations?: Animations;
};

const screenshotRequestProperties: s.Shape<ScreenshotRequest> = {
  url: s.string(),
  format: s.defaulted(formatSchema, Format.Png),
  fullPage: s.defaulted(s.boolean(), false),
  viewport: s.optional(s.lazy(() => viewportInternalSchema)),
  waitUntil: s.defaulted(waitUntilSchema, WaitUntil.Load),
  waitForSelector: s.optional(s.string()),
  selector: s.optional(s.string()),
  delayMs: s.defaulted(s.int(), 0),
  timeoutMs: s.defaulted(s.int(), 20000),
  quality: s.optional(s.int()),
  omitBackground: s.defaulted(s.boolean(), false),
  colorScheme: s.defaulted(colorSchemeSchema, ColorScheme.Light),
  animations: s.defaulted(animationsSchema, Animations.Disabled),
  _keysMap: {
    fullPage: "full_page",
    waitUntil: "wait_until",
    waitForSelector: "wait_for_selector",
    delayMs: "delay_ms",
    timeoutMs: "timeout_ms",
    omitBackground: "omit_background",
    colorScheme: "color_scheme",
  },
};

export const screenshotRequestInternalSchema: Schema<ScreenshotRequest> =
  s.object<ScreenshotRequest>(screenshotRequestProperties);

export const screenshotRequestSchema: Schema<ScreenshotRequest> = s.lazySchema(() =>
  s.object<ScreenshotRequest>({
    ...screenshotRequestProperties,
    url: s.string().check(s.maxLength(4096), s.url()),
    viewport: s.optional(s.lazy(() => viewportSchema)),
    waitForSelector: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
    selector: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
    delayMs: s.defaulted(s.int().check(s.gte(0), s.lte(5000)), 0),
    timeoutMs: s.defaulted(s.int().check(s.gte(1000), s.lte(30000)), 20000),
    quality: s.optional(s.int().check(s.gte(1), s.lte(100))),
  }),
);
