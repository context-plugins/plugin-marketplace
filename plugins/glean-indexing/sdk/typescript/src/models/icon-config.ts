import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconTypeSchema, type IconType } from "./icon-type.js";

/** Defines how to render an icon */
export type IconConfig = {
  generatedBackgroundColorKey?: string;
  backgroundColor?: string;
  color?: string;
  key?: string;
  iconType?: IconType;
  /** Whether the icon should be masked based on current theme. */
  masked?: boolean;
  /** The name of the icon if applicable, e.g. the glyph name for `IconType.GLYPH` icons. */
  name?: string;
  /** The URL to an image to be displayed if applicable, e.g. the URL for `iconType.URL` icons. */
  url?: string;
};

export const iconConfigSchema: Schema<IconConfig> = s.object<IconConfig>({
  generatedBackgroundColorKey: s.optional(s.string()),
  backgroundColor: s.optional(s.string()),
  color: s.optional(s.string()),
  key: s.optional(s.string()),
  iconType: s.optional(s.lazy(() => iconTypeSchema)),
  masked: s.optional(s.boolean()),
  name: s.optional(s.string()),
  url: s.optional(s.string()),
});
