import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { columnSummarySchema, type ColumnSummary } from "./column-summary.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { ownerInfoInternalSchema, ownerInfoSchema, type OwnerInfo } from "./owner-info.js";
import { statusSchema, type Status } from "./status.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

/** Response payload for Get Table — TableDto fields plus live entity/column counts. */
export type TableStatusData = {
  tableId?: string;
  name?: string;
  entityType?: EntityType;
  visibility?: Visibility;
  /**
   * Lifecycle state. `active` and `archived` are filterable via the List Tables `status` field;
   * `deleted` is not a filterable status.
   */
  status?: Status;
  /**
   * Resolved owner of the table. `id` is always present; `email` and `name` are resolved
   * best-effort within the API key's account and may be omitted if resolution fails (in which case
   * the object contains only `id`). Replaces the removed top-level `ownerId` field - this is a
   * breaking change from the prior response shape.
   */
  owner?: OwnerInfo;
  /** Where and by whom the table was created. */
  createdBy?: CreatedBy;
  workspaceUrl?: string;
  entityCount?: number;
  /** Whether any column run is currently in progress on this table. */
  isProcessing?: boolean;
  columns?: ColumnSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableStatusDataProperties: s.Shape<TableStatusData> = {
  tableId: s.optional(s.string()),
  name: s.optional(s.string()),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  visibility: s.optional(s.lazy(() => visibilitySchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  owner: s.optional(s.lazy(() => ownerInfoInternalSchema)),
  createdBy: s.optional(s.lazy(() => createdBySchema)),
  workspaceUrl: s.optional(s.string()),
  entityCount: s.optional(s.int()),
  isProcessing: s.optional(s.boolean()),
  columns: s.optional(s.array(s.lazy(() => columnSummarySchema))),
};

export const tableStatusDataInternalSchema: Schema<TableStatusData> = s.object<TableStatusData>(
  tableStatusDataProperties,
  { additionalProperties: s.json() },
);

export const tableStatusDataSchema: Schema<TableStatusData> = s.lazySchema(() =>
  s.object<TableStatusData>(
    {
      ...tableStatusDataProperties,
      owner: s.optional(s.lazy(() => ownerInfoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
