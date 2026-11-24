import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idsInternalSchema, idsSchema, type Ids } from "./unions/ids.js";
import { reviewedSchema, type Reviewed } from "./unions/reviewed.js";
import { slugsInternalSchema, slugsSchema, type Slugs } from "./unions/slugs.js";
import {
  status11HudPlatformTasksApiSchema,
  type Status11HudPlatformTasksApi,
} from "./unions/status11-hud-platform-tasks-api.js";
import { tasksetId1Schema, type TasksetId1 } from "./unions/taskset-id1.js";

/**
 * Bulk semantic status mutation.
 *
 * Provide exactly one of ``ids`` or ``slugs`` (slugs are task external_ids, resolved within
 * ``taskset_id``), and exactly one of ``status``, reviewer-only ``clear=true``, or ``reviewed``.
 * Clear resets the review state to pending.
 */
export type BulkStatusRequest = {
  ids?: Ids;
  slugs?: Slugs;
  tasksetId?: TasksetId1;
  status?: Status11HudPlatformTasksApi;
  /** @default false */
  clear?: boolean;
  reviewed?: Reviewed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkStatusRequestProperties: s.Shape<BulkStatusRequest> = {
  ids: s.optional(s.lazy(() => idsInternalSchema)),
  slugs: s.optional(s.lazy(() => slugsInternalSchema)),
  tasksetId: s.optional(s.lazy(() => tasksetId1Schema)),
  status: s.optional(s.lazy(() => status11HudPlatformTasksApiSchema)),
  clear: s.defaulted(s.boolean(), false),
  reviewed: s.optional(s.lazy(() => reviewedSchema)),
  _keysMap: {
    tasksetId: "taskset_id",
  },
};

export const bulkStatusRequestInternalSchema: Schema<BulkStatusRequest> = s.object<BulkStatusRequest>(
  bulkStatusRequestProperties,
  { additionalProperties: s.json() },
);

export const bulkStatusRequestSchema: Schema<BulkStatusRequest> = s.lazySchema(() =>
  s.object<BulkStatusRequest>(
    {
      ...bulkStatusRequestProperties,
      ids: s.optional(s.lazy(() => idsSchema)),
      slugs: s.optional(s.lazy(() => slugsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
