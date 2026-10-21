import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import {
  multiEnvironmentDependentFlagSchema,
  type MultiEnvironmentDependentFlag,
} from "./multi-environment-dependent-flag.js";

export type MultiEnvironmentDependentFlags = {
  /** An array of dependent flags with their environment information */
  items: MultiEnvironmentDependentFlag[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  site: Link;
};

export const multiEnvironmentDependentFlagsSchema: Schema<MultiEnvironmentDependentFlags> =
  s.object<MultiEnvironmentDependentFlags>({
    items: s.array(s.lazy(() => multiEnvironmentDependentFlagSchema)),
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
