import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "./managed-delivery-type.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

/** The identifying attributes of the asset to retrieve. */
export type ResourceGetByBodyRequest = {
  /** The public ID of the asset to retrieve. */
  publicId: string;
  /** The type of the asset (image, video, or raw). */
  resourceType: ResourceType;
  /** The delivery type of the asset. */
  kind: ManagedDeliveryType;
  /**
   * Whether to source the asset details from the search index. If false, the details are read
   * directly from the canonical store. Default is true.
   */
  withElastic?: boolean;
  /** Whether to include the derived assets of this asset in the response. Default is true. */
  derived?: boolean;
  /** Whether to include the backup versions of this asset in the response. Default is false. */
  versions?: boolean;
};

export const resourceGetByBodyRequestSchema: Schema<ResourceGetByBodyRequest> =
  s.object<ResourceGetByBodyRequest>({
    publicId: s.string(),
    resourceType: resourceTypeSchema,
    kind: managedDeliveryTypeSchema,
    withElastic: s.optional(s.boolean()),
    derived: s.optional(s.boolean()),
    versions: s.optional(s.boolean()),
    _keysMap: {
      publicId: "public_id",
      resourceType: "resource_type",
      withElastic: "with_elastic",
    },
  });
