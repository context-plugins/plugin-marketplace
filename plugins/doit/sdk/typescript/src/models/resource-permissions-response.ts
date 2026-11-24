import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicDoiTSharingApiSchema, type PublicDoiTSharingApi } from "./public-doi-tsharing-api.js";
import { resourcePermissionSchema, type ResourcePermission } from "./resource-permission.js";

/** Permissions and metadata for a resource returned by the sharing API. */
export type ResourcePermissionsResponse = {
  /** Resource ID. */
  id?: string;
  /** Resource name. */
  name?: string;
  /** Resource description. */
  description?: string;
  /** The time when this resource was created, in milliseconds since the epoch. */
  createTime?: number;
  /** The time when this resource was last updated, in milliseconds since the epoch. */
  updateTime?: number;
  permissions?: ResourcePermission[];
  /** Type of permissions users in the entire organization have for this resource */
  public?: PublicDoiTSharingApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourcePermissionsResponseSchema: Schema<ResourcePermissionsResponse> =
  s.object<ResourcePermissionsResponse>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      createTime: s.optional(s.int()),
      updateTime: s.optional(s.int()),
      permissions: s.optional(s.array(s.lazy(() => resourcePermissionSchema))),
      public: s.optionalNullable(s.lazy(() => publicDoiTSharingApiSchema)),
    },
    { additionalProperties: s.json() },
  );
