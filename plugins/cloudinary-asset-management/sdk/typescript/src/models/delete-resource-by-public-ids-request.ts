import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";

export type DeleteResourceByPublicIdsRequest = {
  /** A list of public IDs of the resources to delete. */
  publicIds: string[];
  /**
   * Delete all assets, including derived assets, where the public ID starts with the specified
   * prefix (up to a maximum of 1000 original resources).
   */
  prefix?: string;
  /**
   * Delete all assets (of the relevant resource_type and type), including derived assets (up to a
   * maximum of 1000 original resources).
   */
  all?: boolean;
  /**
   * The type of asset. Relevant as a parameter only when using the SDKs (the resource_type is
   * included in the endpoint URL when using the REST API). Note: use video for all video and audio
   * assets, such as .mp3. Default: image.
   */
  resourceType?: ResourceType;
  /** Whether to delete only the derived assets. Default: false. @default false */
  keepOriginal?: boolean;
  /**
   * Whether to also invalidate the copies of the resource on the CDN. It usually takes between a
   * few seconds and a few minutes for the invalidation to fully propagate through the CDN. Default:
   * false.
   *
   * @default false
   */
  invalidate?: boolean;
  /**
   * (Only when deleting by prefix or all) When a deletion request has more than 1000 resources to
   * delete, the response includes the partial boolean parameter set to true, as well as a
   * next_cursor value. You can then specify this returned next_cursor value as a parameter of the
   * following deletion request.
   */
  nextCursor?: string;
  /**
   * Only the derived assets matching this hash of transformation parameters will be deleted. You
   * can include multiple transformations separated by a pipe character (|).
   */
  transformations?: string;
};

export const deleteResourceByPublicIdsRequestSchema: Schema<DeleteResourceByPublicIdsRequest> =
  s.object<DeleteResourceByPublicIdsRequest>({
    publicIds: s.array(s.string()),
    prefix: s.optional(s.string()),
    all: s.optional(s.boolean()),
    resourceType: s.optional(s.lazy(() => resourceTypeSchema)),
    keepOriginal: s.defaulted(s.boolean(), false),
    invalidate: s.defaulted(s.boolean(), false),
    nextCursor: s.optional(s.string()),
    transformations: s.optional(s.string()),
    _keysMap: {
      publicIds: "public_ids",
      resourceType: "resource_type",
      keepOriginal: "keep_original",
      nextCursor: "next_cursor",
    },
  });
