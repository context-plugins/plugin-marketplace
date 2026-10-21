import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subGroupSchema, type SubGroup } from "./sub-group.js";

/** Only available on `transaction-categories` grouping. */
export type Open = {
  pending?: SubGroup;
  available?: SubGroup;
};

export const openSchema: Schema<Open> = s.object<Open>({
  pending: s.optional(s.lazy(() => subGroupSchema)),
  available: s.optional(s.lazy(() => subGroupSchema)),
});
