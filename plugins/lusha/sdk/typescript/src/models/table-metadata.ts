import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import { ownerInfoInternalSchema, ownerInfoSchema, type OwnerInfo } from "./owner-info.js";
import { statusSchema, type Status } from "./status.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

/** TableDto — static metadata for a table. */
export type TableMetadata = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableMetadataProperties: s.Shape<TableMetadata> = {
  tableId: s.optional(s.string()),
  name: s.optional(s.string()),
  entityType: s.optional(s.lazy(() => entityTypeSchema)),
  visibility: s.optional(s.lazy(() => visibilitySchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  owner: s.optional(s.lazy(() => ownerInfoInternalSchema)),
  createdBy: s.optional(s.lazy(() => createdBySchema)),
  workspaceUrl: s.optional(s.string()),
};

export const tableMetadataInternalSchema: Schema<TableMetadata> = s.object<TableMetadata>(
  tableMetadataProperties,
  { additionalProperties: s.json() },
);

export const tableMetadataSchema: Schema<TableMetadata> = s.lazySchema(() =>
  s.object<TableMetadata>(
    {
      ...tableMetadataProperties,
      owner: s.optional(s.lazy(() => ownerInfoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
