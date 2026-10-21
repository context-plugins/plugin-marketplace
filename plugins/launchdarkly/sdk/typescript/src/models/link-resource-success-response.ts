import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failedResourceLinkSchema, type FailedResourceLink } from "./failed-resource-link.js";
import { viewLinkedResourcesSchema, type ViewLinkedResources } from "./view-linked-resources.js";

export type LinkResourceSuccessResponse = {
  /** The number of resources successfully linked. */
  successCount: number;
  /** The number of resources that failed to link. */
  failureCount: number;
  linkedResources?: ViewLinkedResources;
  /** Details of resources that failed to link. */
  failedResources?: FailedResourceLink[];
};

export const linkResourceSuccessResponseSchema: Schema<LinkResourceSuccessResponse> =
  s.object<LinkResourceSuccessResponse>({
    successCount: s.int(),
    failureCount: s.int(),
    linkedResources: s.optional(s.lazy(() => viewLinkedResourcesSchema)),
    failedResources: s.optional(s.array(s.lazy(() => failedResourceLinkSchema))),
  });
