import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagStatusRepSchema, type FlagStatusRep } from "./flag-status-rep.js";
import { linkSchema, type Link } from "./link.js";

export type FeatureFlagStatuses = {
  links: Record<string, Link>;
  items?: FlagStatusRep[];
};

export const featureFlagStatusesSchema: Schema<FeatureFlagStatuses> = s.object<FeatureFlagStatuses>({
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  items: s.optional(s.array(s.lazy(() => flagStatusRepSchema))),
  _keysMap: {
    links: "_links",
  },
});
