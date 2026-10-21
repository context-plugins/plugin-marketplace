import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

/** Displays a user's accomplishment or milestone */
export type Badge = {
  /** An auto generated unique identifier. */
  key?: string;
  /** The badge name displayed to users */
  displayName?: string;
  /** Defines how to render an icon */
  iconConfig?: IconConfig;
  /** The badge should be shown on the PersonAttribution */
  pinned?: boolean;
};

export const badgeSchema: Schema<Badge> = s.object<Badge>({
  key: s.optional(s.string()),
  displayName: s.optional(s.string()),
  iconConfig: s.optional(s.lazy(() => iconConfigSchema)),
  pinned: s.optional(s.boolean()),
});
