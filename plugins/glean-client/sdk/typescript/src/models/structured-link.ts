import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

/** The display configuration for a link. */
export type StructuredLink = {
  /** The display name for the link */
  name?: string;
  /** The URL for the link. */
  url?: string;
  /** Defines how to render an icon */
  iconConfig?: IconConfig;
};

export const structuredLinkSchema: Schema<StructuredLink> = s.object<StructuredLink>({
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  iconConfig: s.optional(s.lazy(() => iconConfigSchema)),
});
