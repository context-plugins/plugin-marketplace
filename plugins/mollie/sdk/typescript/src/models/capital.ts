import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subGroupSchema, type SubGroup } from "./sub-group.js";

/** Only available on `transaction-categories` grouping. */
export type Capital = {
  pending?: SubGroup;
  movedToAvailable?: SubGroup;
  immediatelyAvailable?: SubGroup;
};

export const capitalSchema: Schema<Capital> = s.object<Capital>({
  pending: s.optional(s.lazy(() => subGroupSchema)),
  movedToAvailable: s.optional(s.lazy(() => subGroupSchema)),
  immediatelyAvailable: s.optional(s.lazy(() => subGroupSchema)),
});
