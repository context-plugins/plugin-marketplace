import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request parameters for deleting derived resources */
export type DerivedDestroyRequest = {
  /** Array of derived resource IDs to delete specific derived resources */
  derivedResourceIds: string[];
  /** Whether to invalidate the CDN cache for the deleted resources */
  invalidate?: boolean;
};

export const derivedDestroyRequestSchema: Schema<DerivedDestroyRequest> = s.object<DerivedDestroyRequest>({
  derivedResourceIds: s.array(s.string()),
  invalidate: s.optional(s.boolean()),
  _keysMap: {
    derivedResourceIds: "derived_resource_ids",
  },
});
