import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { public1DoiTSharingApiSchema, type Public1DoiTSharingApi } from "./public1-doi-tsharing-api.js";
import { resourcePermissionSchema, type ResourcePermission } from "./resource-permission.js";

export type SharingV1Request = {
  permissions?: ResourcePermission[];
  /**
   * The type of permissions granted to all users in the organization for this resource.
   *
   * Allocations (single and group) always have at least `viewer` public access, so it cannot be
   * cleared:
   * - If `public` is omitted, the stored value is kept.
   * - An empty string (`""`) is accepted for backward compatibility and is treated as `viewer`.
   * - An explicit `null` is rejected with `400 Bad Request`.
   *
   * For Reports, Budgets, and Alerts, an omitted or `null` value sets `public` to `null` (no public
   * access).
   */
  public?: Public1DoiTSharingApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharingV1RequestSchema: Schema<SharingV1Request> = s.object<SharingV1Request>(
  {
    permissions: s.optional(s.array(s.lazy(() => resourcePermissionSchema))),
    public: s.optionalNullable(s.lazy(() => public1DoiTSharingApiSchema)),
  },
  { additionalProperties: s.json() },
);
