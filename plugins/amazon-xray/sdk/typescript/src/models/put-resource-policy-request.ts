import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PutResourcePolicyRequest = {
  /**
   * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
   */
  policyName: string;
  /** The resource policy document, which can be up to 5kb in size. */
  policyDocument: string;
  /**
   * Specifies a specific policy revision, to ensure an atomic create operation. By default the
   * resource policy is created if it does not exist, or updated with an incremented revision id.
   * The revision id is unique to each policy in the account. If the policy revision id does not
   * match the latest revision id, the operation will fail with an InvalidPolicyRevisionIdException
   * exception. You can also provide a PolicyRevisionId of 0. In this case, the operation will fail
   * with an InvalidPolicyRevisionIdException exception if a resource policy with the same name
   * already exists.
   */
  policyRevisionId?: string;
  /**
   * A flag to indicate whether to bypass the resource policy lockout safety check. Setting this
   * value to true increases the risk that the policy becomes unmanageable. Do not set this value to
   * true indiscriminately. Use this parameter only when you include a policy in the request and you
   * intend to prevent the principal that is making the request from making a subsequent
   * PutResourcePolicy request. The default value is false.
   */
  bypassPolicyLockoutCheck?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const putResourcePolicyRequestSchema: Schema<PutResourcePolicyRequest> =
  s.object<PutResourcePolicyRequest>(
    {
      policyName: s.string(),
      policyDocument: s.string(),
      policyRevisionId: s.optional(s.string()),
      bypassPolicyLockoutCheck: s.optional(s.boolean()),
      _keysMap: {
        policyName: "PolicyName",
        policyDocument: "PolicyDocument",
        policyRevisionId: "PolicyRevisionId",
        bypassPolicyLockoutCheck: "BypassPolicyLockoutCheck",
      },
    },
    { additionalProperties: s.json() },
  );
