import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the items for which the `audit-log` has a `resource` that matches
 * this type value.
 */
export type ResourceType = string;

export const resourceTypeSchema: Schema<ResourceType> = s.of<ResourceType>(s.union([s.string()]));
