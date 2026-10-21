import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedFlagSchema, type ExpandedFlag } from "./expanded-flag.js";

/** Details on linked flags for a view - requires passing the 'allFlags' expand field */
export type ExpandedLinkedFlags = {
  items: ExpandedFlag[];
  totalCount: number;
};

export const expandedLinkedFlagsSchema: Schema<ExpandedLinkedFlags> = s.object<ExpandedLinkedFlags>({
  items: s.array(s.lazy(() => expandedFlagSchema)),
  totalCount: s.int(),
});
