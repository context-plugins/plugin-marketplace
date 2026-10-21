import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type DependentFlagEnvironment = {
  /** The environment name */
  name?: string;
  /** The environment key */
  key: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  site: Link;
};

export const dependentFlagEnvironmentSchema: Schema<DependentFlagEnvironment> =
  s.object<DependentFlagEnvironment>({
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
