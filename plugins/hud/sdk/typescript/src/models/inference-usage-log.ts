import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeyIdSchema, type ApiKeyId } from "./unions/api-key-id.js";
import { apiKeyNameSchema, type ApiKeyName } from "./unions/api-key-name.js";
import { byokCredentialIdSchema, type ByokCredentialId } from "./unions/byok-credential-id.js";
import { checkpointSchema, type Checkpoint } from "./unions/checkpoint.js";
import { modelCheckpointIdSchema, type ModelCheckpointId } from "./unions/model-checkpoint-id.js";
import { userEmailSchema, type UserEmail } from "./unions/user-email.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

/** One inference request; QA analysis requests report ``model`` as the HUD QA label. */
export type InferenceUsageLog = {
  id: string;
  createdAt: Date;
  model: string;
  /** @default false */
  qaAnalysis?: boolean;
  cost: number;
  type: string;
  modelCheckpointId?: ModelCheckpointId;
  checkpoint?: Checkpoint;
  metadata?: Record<string, unknown>;
  userId?: UserId;
  userName?: UserName;
  userEmail?: UserEmail;
  apiKeyId?: ApiKeyId;
  apiKeyName?: ApiKeyName;
  /** @default false */
  byok?: boolean;
  byokCredentialId?: ByokCredentialId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inferenceUsageLogSchema: Schema<InferenceUsageLog> = s.object<InferenceUsageLog>(
  {
    id: s.string(),
    createdAt: s.dateTime(),
    model: s.string(),
    qaAnalysis: s.defaulted(s.boolean(), false),
    cost: s.float64(),
    type: s.string(),
    modelCheckpointId: s.optional(s.lazy(() => modelCheckpointIdSchema)),
    checkpoint: s.optional(s.lazy(() => checkpointSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    userId: s.optional(s.lazy(() => userIdSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    userEmail: s.optional(s.lazy(() => userEmailSchema)),
    apiKeyId: s.optional(s.lazy(() => apiKeyIdSchema)),
    apiKeyName: s.optional(s.lazy(() => apiKeyNameSchema)),
    byok: s.defaulted(s.boolean(), false),
    byokCredentialId: s.optional(s.lazy(() => byokCredentialIdSchema)),
    _keysMap: {
      createdAt: "created_at",
      qaAnalysis: "qa_analysis",
      modelCheckpointId: "model_checkpoint_id",
      userId: "user_id",
      userName: "user_name",
      userEmail: "user_email",
      apiKeyId: "api_key_id",
      apiKeyName: "api_key_name",
      byokCredentialId: "byok_credential_id",
    },
  },
  { additionalProperties: s.json() },
);
