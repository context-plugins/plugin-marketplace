import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relationTypeSchema, type RelationType } from "./relation-type.js";

export type FacetFilterValue = {
  value?: string;
  relationType?: RelationType;
  /**
   * DEPRECATED - please use relationType instead
   *
   * @deprecated
   */
  isNegated?: boolean;
};

export const facetFilterValueSchema: Schema<FacetFilterValue> = s.object<FacetFilterValue>({
  value: s.optional(s.string()),
  relationType: s.optional(s.lazy(() => relationTypeSchema)),
  isNegated: s.optional(s.boolean()),
});
