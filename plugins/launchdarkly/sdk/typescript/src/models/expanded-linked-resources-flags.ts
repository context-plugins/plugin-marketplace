import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedFlagSchema, type ExpandedFlag } from "./expanded-flag.js";

export type ExpandedLinkedResourcesFlags = {
  items: ExpandedFlag[];
  totalCount: number;
};

export const expandedLinkedResourcesFlagsSchema: Schema<ExpandedLinkedResourcesFlags> =
  s.object<ExpandedLinkedResourcesFlags>({
    items: s.array(s.lazy(() => expandedFlagSchema)),
    totalCount: s.int(),
  });
