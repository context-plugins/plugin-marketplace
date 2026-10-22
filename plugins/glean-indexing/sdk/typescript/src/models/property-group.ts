import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A grouping for multiple PropertyDefinition. Grouped properties will be displayed together in the
 * UI.
 */
export type PropertyGroup = {
  /** The unique identifier of the group. */
  name?: string;
  /** The user-friendly group label to display. */
  displayLabel?: string;
};

export const propertyGroupSchema: Schema<PropertyGroup> = s.object<PropertyGroup>({
  name: s.optional(s.string()),
  displayLabel: s.optional(s.string()),
});
