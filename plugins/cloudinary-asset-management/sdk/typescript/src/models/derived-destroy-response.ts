import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deletedSchema, type Deleted } from "./deleted.js";
import { invalidationSchema, type Invalidation } from "./invalidation.js";

/** Response for derived resource deletion */
export type DerivedDestroyResponse = {
  /** Map of derived resource IDs to deletion status */
  deleted?: Record<string, Deleted>;
  /** Array of derived resource IDs that were not authorized to be deleted */
  unauthorized?: string[];
  invalidation?: Invalidation;
};

export const derivedDestroyResponseSchema: Schema<DerivedDestroyResponse> = s.object<DerivedDestroyResponse>({
  deleted: s.optional(
    s.record(
      s.string(),
      s.lazy(() => deletedSchema),
    ),
  ),
  unauthorized: s.optional(s.array(s.string())),
  invalidation: s.optional(s.lazy(() => invalidationSchema)),
});
