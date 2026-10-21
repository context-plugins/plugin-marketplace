import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type DependentFlag = {
  /** The flag name */
  name?: string;
  /** The flag key */
  key: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  site: Link;
};

export const dependentFlagSchema: Schema<DependentFlag> = s.object<DependentFlag>({
  name: s.optional(s.string()),
  key: s.string(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  site: linkSchema,
  _keysMap: {
    links: "_links",
    site: "_site",
  },
});
