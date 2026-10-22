import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failedResourceLinkSchema, type FailedResourceLink } from "./failed-resource-link.js";

export type UnlinkResourceSuccessResponse = {
  /** The number of resources successfully unlinked. */
  successCount: number;
  /** The number of resources that failed to unlink. */
  failureCount: number;
  /** Details of resources that failed to unlink. */
  failedResources?: FailedResourceLink[];
};

export const unlinkResourceSuccessResponseSchema: Schema<UnlinkResourceSuccessResponse> =
  s.object<UnlinkResourceSuccessResponse>({
    successCount: s.int(),
    failureCount: s.int(),
    failedResources: s.optional(s.array(s.lazy(() => failedResourceLinkSchema))),
  });
