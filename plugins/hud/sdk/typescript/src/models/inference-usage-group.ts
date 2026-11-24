import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeyIdSchema, type ApiKeyId } from "./unions/api-key-id.js";
import { apiKeyNameSchema, type ApiKeyName } from "./unions/api-key-name.js";
import { apiKeyOwnerSchema, type ApiKeyOwner } from "./unions/api-key-owner.js";
import { byokCredentialIdSchema, type ByokCredentialId } from "./unions/byok-credential-id.js";
import { byokNameSchema, type ByokName } from "./unions/byok-name.js";
import { byokOwnerSchema, type ByokOwner } from "./unions/byok-owner.js";
import { byokScope1Schema, type ByokScope1 } from "./unions/byok-scope1.js";
import {
  modelHudPlatformUsageApiSchema,
  type ModelHudPlatformUsageApi,
} from "./unions/model-hud-platform-usage-api.js";
import { routeSchema, type Route } from "./unions/route.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

/**
 * One group within a bucket.
 *
 * The dimension fields matching the requested ``group_by`` dimensions are set; all are None for
 * ungrouped queries. ``api_key_id``/``user_id`` may be set with a None name (deleted user, key
 * created before attribution); a None ``api_key_id`` group under ``group_by=api_key`` collects
 * Clerk-session (non-key) usage. Under ``group_by=model``, QA analysis inference forms one
 * ``qa_analysis`` group whose ``model`` is the HUD QA label rather than the model it ran on.
 */
export type InferenceUsageGroup = {
  apiKeyId?: ApiKeyId;
  apiKeyName?: ApiKeyName;
  /** @default false */
  apiKeyIsDefault?: boolean;
  apiKeyOwner?: ApiKeyOwner;
  /** @default false */
  byok?: boolean;
  byokCredentialId?: ByokCredentialId;
  byokName?: ByokName;
  byokScope?: ByokScope1;
  byokOwner?: ByokOwner;
  model?: ModelHudPlatformUsageApi;
  /** @default false */
  qaAnalysis?: boolean;
  userId?: UserId;
  userName?: UserName;
  route?: Route;
  requests: number;
  inputTokens: number;
  outputTokens: number;
  cachedInputTokens: number;
  cost: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inferenceUsageGroupSchema: Schema<InferenceUsageGroup> = s.object<InferenceUsageGroup>(
  {
    apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
    apiKeyName: s.optional(s.lazy(() => apiKeyNameSchema)),
    apiKeyIsDefault: s.defaulted(s.boolean(), false),
    apiKeyOwner: s.optional(s.lazy(() => apiKeyOwnerSchema)),
    byok: s.defaulted(s.boolean(), false),
    byokCredentialId: s.optional(s.lazy(() => byokCredentialIdSchema)),
    byokName: s.optional(s.lazy(() => byokNameSchema)),
    byokScope: s.optional(s.lazy(() => byokScope1Schema)),
    byokOwner: s.optional(s.lazy(() => byokOwnerSchema)),
    model: s.optional(s.lazy(() => modelHudPlatformUsageApiSchema)),
    qaAnalysis: s.defaulted(s.boolean(), false),
    userId: s.optional(s.lazy(() => userIdSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    route: s.optional(s.lazy(() => routeSchema)),
    requests: s.int(),
    inputTokens: s.int(),
    outputTokens: s.int(),
    cachedInputTokens: s.int(),
    cost: s.float64(),
    _keysMap: {
      apiKeyId: "api_key_id",
      apiKeyName: "api_key_name",
      apiKeyIsDefault: "api_key_is_default",
      apiKeyOwner: "api_key_owner",
      byokCredentialId: "byok_credential_id",
      byokName: "byok_name",
      byokScope: "byok_scope",
      byokOwner: "byok_owner",
      qaAnalysis: "qa_analysis",
      userId: "user_id",
      userName: "user_name",
      inputTokens: "input_tokens",
      outputTokens: "output_tokens",
      cachedInputTokens: "cached_input_tokens",
    },
  },
  { additionalProperties: s.json() },
);
