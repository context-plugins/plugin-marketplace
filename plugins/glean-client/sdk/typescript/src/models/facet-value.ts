import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";

export type FacetValue = {
  /**
   * The value that should be set in the FacetFilter when applying this filter to a search request.
   */
  stringValue?: string;
  integerValue?: number;
  /** An optional user-friendly label to display in place of the facet value. */
  displayLabel?: string;
  /** Defines how to render an icon */
  iconConfig?: IconConfig;
};

export const facetValueSchema: Schema<FacetValue> = s.object<FacetValue>({
  stringValue: s.optional(s.string()),
  integerValue: s.optional(s.int()),
  displayLabel: s.optional(s.string()),
  iconConfig: s.optional(s.lazy(() => iconConfigSchema)),
});
