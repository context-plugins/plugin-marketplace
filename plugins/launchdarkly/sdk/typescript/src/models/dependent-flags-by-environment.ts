import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dependentFlagSchema, type DependentFlag } from "./dependent-flag.js";
import { linkSchema, type Link } from "./link.js";

export type DependentFlagsByEnvironment = {
  /** A list of dependent flags, which are flags that use the requested flag as a prerequisite */
  items: DependentFlag[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  site: Link;
};

export const dependentFlagsByEnvironmentSchema: Schema<DependentFlagsByEnvironment> =
  s.object<DependentFlagsByEnvironment>({
    items: s.array(s.lazy(() => dependentFlagSchema)),
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
