import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { marginSchema, type Margin } from "./margin.js";
import { Orientation, orientationSchema } from "./orientation.js";
import { Size, sizeSchema } from "./size.js";

/** Optional paper/viewport setup for the PDF and PNG. */
export type PageSetup = {
  /** @default Size.A4 */
  size?: Size;
  /** @default Orientation.Portrait */
  orientation?: Orientation;
  /** PDF page margins as CSS values (e.g. '1cm', '24px'). */
  margin?: Margin;
  /** PDF render scale (0.1–2). Default 1. */
  scale?: number;
  /** PNG viewport width in px. Default 1280. */
  width?: number;
  /** PNG viewport height in px. Default 800. */
  height?: number;
  /** Capture the full scrollable page for the PNG. Default true. */
  fullPage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pageSetupProperties: s.Shape<PageSetup> = {
  size: s.defaulted(sizeSchema, Size.A4),
  orientation: s.defaulted(orientationSchema, Orientation.Portrait),
  margin: s.optional(s.lazy(() => marginSchema)),
  scale: s.optional(s.float64()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  fullPage: s.optional(s.boolean()),
};

export const pageSetupInternalSchema: Schema<PageSetup> = s.object<PageSetup>(pageSetupProperties, {
  additionalProperties: s.json(),
});

export const pageSetupSchema: Schema<PageSetup> = s.lazySchema(() =>
  s.object<PageSetup>(
    {
      ...pageSetupProperties,
      scale: s.optional(s.float64().check(s.gte(0.1), s.lte(2))),
      width: s.optional(s.int().check(s.gte(320), s.lte(3840))),
      height: s.optional(s.int().check(s.gte(240), s.lte(2160))),
    },
    { additionalProperties: s.json() },
  ),
);
