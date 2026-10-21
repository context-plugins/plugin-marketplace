import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertyTypeSchema, type PropertyType } from "./property-type.js";
import { uiOptionsSchema, type UiOptions } from "./ui-options.js";

export type PropertyDefinition = {
  /**
   * The name of the property in the `DocumentMetadata` (e.g. 'createTime', 'updateTime', 'author',
   * 'container'). In the future, this will support custom properties too.
   */
  name?: string;
  /** The user friendly label for the property. */
  displayLabel?: string;
  /** The user friendly label for the property that will be used if a plural context. */
  displayLabelPlural?: string;
  /**
   * The type of custom property - this governs the search and faceting behavior. Note that
   * MULTIPICKLIST is not yet supported.
   */
  propertyType?: PropertyType;
  uiOptions?: UiOptions;
  /** If true then the property will not show up as a facet in the UI. */
  hideUiFacet?: boolean;
  /**
   * Will be used to set the order of facets in the UI, if present. If set for one facet, must be
   * set for all non-hidden UI facets. Must take on an integer value from 1 (shown at the top) to N
   * (shown last), where N is the number of non-hidden UI facets. These facets will be ordered below
   * the built-in "Type" and "Tag" operators.
   */
  uiFacetOrder?: number;
  /** If true then the property will not be indexed for retrieval and ranking. */
  skipIndexing?: boolean;
  /** The unique identifier of the `PropertyGroup` to which this property belongs. */
  group?: string;
};

export const propertyDefinitionSchema: Schema<PropertyDefinition> = s.object<PropertyDefinition>({
  name: s.optional(s.string()),
  displayLabel: s.optional(s.string()),
  displayLabelPlural: s.optional(s.string()),
  propertyType: s.optional(s.lazy(() => propertyTypeSchema)),
  uiOptions: s.optional(s.lazy(() => uiOptionsSchema)),
  hideUiFacet: s.optional(s.boolean()),
  uiFacetOrder: s.optional(s.int()),
  skipIndexing: s.optional(s.boolean()),
  group: s.optional(s.string()),
});
