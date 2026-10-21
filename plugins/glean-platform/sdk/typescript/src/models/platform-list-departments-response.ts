import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformDepartmentReferenceSchema,
  type PlatformDepartmentReference,
} from "./platform-department-reference.js";

/** One page of departments. */
export type PlatformListDepartmentsResponse = {
  /** The departments on this page, ordered by display_name and then by department_id. */
  results: PlatformDepartmentReference[];
  /** Whether more departments are available after this page. */
  hasMore: boolean;
  /** Opaque cursor for the next page; null or absent when has_more is false. */
  nextCursor?: string | null;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformListDepartmentsResponseSchema: Schema<PlatformListDepartmentsResponse> =
  s.object<PlatformListDepartmentsResponse>({
    results: s.array(s.lazy(() => platformDepartmentReferenceSchema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
