import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceType1Schema, type ResourceType1 } from "./resource-type1.js";

export type FailedResourceLink = {
  /** The key of the resource that failed to link. */
  resourceKey: string;
  /** Environment ID of the resource (only present for segments) */
  environmentId?: string;
  /** The type of the resource that failed to link. */
  resourceType: ResourceType1;
  /** The reason why linking this resource failed. */
  errorMessage: string;
};

export const failedResourceLinkSchema: Schema<FailedResourceLink> = s.object<FailedResourceLink>({
  resourceKey: s.string(),
  environmentId: s.optional(s.string()),
  resourceType: resourceType1Schema,
  errorMessage: s.string(),
});
