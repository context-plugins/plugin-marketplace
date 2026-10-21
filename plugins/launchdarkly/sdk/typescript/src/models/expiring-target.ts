import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceIdSchema, type ResourceId } from "./resource-id.js";

export type ExpiringTarget = {
  /** The ID of this expiring target */
  id: string;
  /** The version of this expiring target */
  version: number;
  expirationDate: number;
  /** The context kind of the context to be removed */
  contextKind: string;
  /** A unique key used to represent the context to be removed */
  contextKey: string;
  /**
   * A segment's target type, <code>included</code> or <code>excluded</code>. Included when expiring
   * targets are updated on a segment.
   */
  targetType?: string;
  /**
   * A unique ID used to represent the flag variation. Included when expiring targets are updated on
   * a feature flag.
   */
  variationId?: string;
  resourceId: ResourceId;
};

export const expiringTargetSchema: Schema<ExpiringTarget> = s.object<ExpiringTarget>({
  id: s.string(),
  version: s.int(),
  expirationDate: s.int(),
  contextKind: s.string(),
  contextKey: s.string(),
  targetType: s.optional(s.string()),
  variationId: s.optional(s.string()),
  resourceId: resourceIdSchema,
  _keysMap: {
    id: "_id",
    version: "_version",
    resourceId: "_resourceId",
  },
});
