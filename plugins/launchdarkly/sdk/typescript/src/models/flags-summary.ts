import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedDirectlyLinkedFlagsSchema,
  type ExpandedDirectlyLinkedFlags,
} from "./expanded-directly-linked-flags.js";

export type FlagsSummary = {
  count: number;
  linkedFlags?: ExpandedDirectlyLinkedFlags;
};

export const flagsSummarySchema: Schema<FlagsSummary> = s.object<FlagsSummary>({
  count: s.int(),
  linkedFlags: s.optional(s.lazy(() => expandedDirectlyLinkedFlagsSchema)),
});
