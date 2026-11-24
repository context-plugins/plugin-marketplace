import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response message for `TestIamPermissions` method. */
export type GoogleIamV1TestIamPermissionsResponse = {
  /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleIamV1TestIamPermissionsResponseSchema: Schema<GoogleIamV1TestIamPermissionsResponse> =
  s.object<GoogleIamV1TestIamPermissionsResponse>(
    {
      permissions: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
