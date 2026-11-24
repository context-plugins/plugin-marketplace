import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request message for `TestIamPermissions` method. */
export type TestIamPermissionsRequest = {
  /**
   * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or
   * `storage.*`) are not allowed. For more information see [IAM
   * Overview](https://cloud.google.com/iam/docs/overview#permissions).
   */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testIamPermissionsRequestSchema: Schema<TestIamPermissionsRequest> =
  s.object<TestIamPermissionsRequest>(
    {
      permissions: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
