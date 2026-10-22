import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { docCategorySchema, type DocCategory } from "./doc-category.js";
import { propertyDefinitionSchema, type PropertyDefinition } from "./property-definition.js";
import { propertyGroupSchema, type PropertyGroup } from "./property-group.js";

/** The definition for an `DocumentMetadata.objectType` within a datasource. */
export type ObjectDefinition = {
  /**
   * Unique identifier for this `DocumentMetadata.objectType`. If omitted, this definition is used
   * as a default for all unmatched `DocumentMetadata.objectType`s in this datasource.
   */
  name?: string;
  /** The user-friendly name of the object for display. */
  displayLabel?: string;
  /** The document category of this object type. */
  docCategory?: DocCategory;
  propertyDefinitions?: PropertyDefinition[];
  /**
   * A list of `PropertyGroup`s belonging to this object type, which will group properties to be
   * displayed together in the UI.
   */
  propertyGroups?: PropertyGroup[];
  /** Whether or not the object is summarizable */
  summarizable?: boolean;
};

export const objectDefinitionSchema: Schema<ObjectDefinition> = s.object<ObjectDefinition>({
  name: s.optional(s.string()),
  displayLabel: s.optional(s.string()),
  docCategory: s.optional(s.lazy(() => docCategorySchema)),
  propertyDefinitions: s.optional(s.array(s.lazy(() => propertyDefinitionSchema))),
  propertyGroups: s.optional(s.array(s.lazy(() => propertyGroupSchema))),
  summarizable: s.optional(s.boolean()),
});
