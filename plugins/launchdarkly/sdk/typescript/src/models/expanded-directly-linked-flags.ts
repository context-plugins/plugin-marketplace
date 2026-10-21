import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedDirectlyLinkedFlagSchema,
  type ExpandedDirectlyLinkedFlag,
} from "./expanded-directly-linked-flag.js";

export type ExpandedDirectlyLinkedFlags = {
  items: ExpandedDirectlyLinkedFlag[];
  totalCount: number;
};

export const expandedDirectlyLinkedFlagsSchema: Schema<ExpandedDirectlyLinkedFlags> =
  s.object<ExpandedDirectlyLinkedFlags>({
    items: s.array(s.lazy(() => expandedDirectlyLinkedFlagSchema)),
    totalCount: s.int(),
  });
