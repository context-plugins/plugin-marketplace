import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adminContextOperationSchema, type AdminContextOperation } from "./admin-context-operation.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "./managed-delivery-type.js";
import { moderationStatus1Schema, type ModerationStatus1 } from "./moderation-status1.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

/**
 * The asset identifiers plus the attributes to update. The identifying fields (public_id,
 * resource_type, kind) are required; the remaining update fields are optional. Additional fields
 * accepted by the asset update API are permitted.
 */
export type ResourceUpdateByBodyRequest = {
  /** The public ID of the asset to update. */
  publicId: string;
  /** The type of the asset (image, video, or raw). */
  resourceType: ResourceType;
  /** The delivery type of the asset. */
  kind: ManagedDeliveryType;
  /** The list of tags to assign to the asset, replacing any existing tags. */
  tags?: string[];
  /** The key-value pairs of contextual metadata to assign to the asset. */
  context?: Record<string, unknown>;
  /** The structured metadata field values to assign to the asset. */
  metadata?: Record<string, unknown>;
  /** The asset folder to move the asset into. */
  assetFolder?: string;
  /** The display name to assign to the asset. */
  displayName?: string;
  /** The moderation status to set on the asset. */
  moderationStatus?: ModerationStatus1;
  /**
   * Internal-only contextual metadata operations applied with add/remove semantics. Each entry
   * names a context key, the value(s) to apply, the value type, and the operation.
   */
  adminContext?: AdminContextOperation[];
  /** The shape of the asset representation to return (for example, "public"). */
  responseType?: string;
  /** Whether to skip permission enforcement for the update. Internal use only. Default is false. */
  skipPermissionCheck?: boolean;
};

export const resourceUpdateByBodyRequestSchema: Schema<ResourceUpdateByBodyRequest> =
  s.object<ResourceUpdateByBodyRequest>({
    publicId: s.string(),
    resourceType: resourceTypeSchema,
    kind: managedDeliveryTypeSchema,
    tags: s.optional(s.array(s.string())),
    context: s.optional(s.record(s.string(), s.unknown())),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    assetFolder: s.optional(s.string()),
    displayName: s.optional(s.string()),
    moderationStatus: s.optional(s.lazy(() => moderationStatus1Schema)),
    adminContext: s.optional(s.array(s.lazy(() => adminContextOperationSchema))),
    responseType: s.optional(s.string()),
    skipPermissionCheck: s.optional(s.boolean()),
    _keysMap: {
      publicId: "public_id",
      resourceType: "resource_type",
      assetFolder: "asset_folder",
      displayName: "display_name",
      moderationStatus: "moderation_status",
      adminContext: "admin_context",
      responseType: "response_type",
      skipPermissionCheck: "skip_permission_check",
    },
  });
