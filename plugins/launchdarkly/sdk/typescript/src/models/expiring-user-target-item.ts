import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceIdResponseSchema, type ResourceIdResponse } from "./resource-id-response.js";

export type ExpiringUserTargetItem = {
  /** The ID of this expiring user target */
  id: string;
  /** The version of this expiring user target */
  version: number;
  expirationDate: number;
  /** A unique key used to represent the user */
  userKey: string;
  /** A segment's target type. Included when expiring user targets are updated on a segment. */
  targetType?: string;
  /**
   * A unique key used to represent the flag variation. Included when expiring user targets are
   * updated on a feature flag.
   */
  variationId?: string;
  resourceId: ResourceIdResponse;
};

export const expiringUserTargetItemSchema: Schema<ExpiringUserTargetItem> = s.object<ExpiringUserTargetItem>({
  id: s.string(),
  version: s.int(),
  expirationDate: s.int(),
  userKey: s.string(),
  targetType: s.optional(s.string()),
  variationId: s.optional(s.string()),
  resourceId: resourceIdResponseSchema,
  _keysMap: {
    id: "_id",
    version: "_version",
    resourceId: "_resourceId",
  },
});
