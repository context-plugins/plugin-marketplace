import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  resourceInternalResponseSchema,
  type ResourceInternalResponse,
} from "./resource-internal-response.js";

/** A page of assets contained in a folder, with pagination metadata. */
export type ResourcesByContainerIdResponse = {
  /** The assets contained in the folder. */
  resources: ResourceInternalResponse[];
  /** The total number of assets in the folder. */
  totalCount?: number;
  /** A cursor for retrieving the next page of results, when more results are available. */
  nextCursor?: string;
};

export const resourcesByContainerIdResponseSchema: Schema<ResourcesByContainerIdResponse> =
  s.object<ResourcesByContainerIdResponse>({
    resources: s.array(s.lazy(() => resourceInternalResponseSchema)),
    totalCount: s.optional(s.int()),
    nextCursor: s.optional(s.string()),
    _keysMap: {
      totalCount: "total_count",
      nextCursor: "next_cursor",
    },
  });
