import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createFaceLivenessSessionRequestSettingsSchema,
  type CreateFaceLivenessSessionRequestSettings,
} from "./create-face-liveness-session-request-settings.js";

export type CreateFaceLivenessSessionRequest = {
  /**
   * The identifier for your AWS Key Management Service key (AWS KMS key). Used to encrypt audit
   * images and reference images.
   */
  kmsKeyId?: string;
  settings?: CreateFaceLivenessSessionRequestSettings;
  /**
   * Idempotent token is used to recognize the Face Liveness request. If the same token is used with
   * multiple CreateFaceLivenessSession requests, the same session is returned. This token is
   * employed to avoid unintentionally creating the same session multiple times.
   */
  clientRequestToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createFaceLivenessSessionRequestSchema: Schema<CreateFaceLivenessSessionRequest> =
  s.object<CreateFaceLivenessSessionRequest>(
    {
      kmsKeyId: s.optional(s.string()),
      settings: s.optional(s.lazy(() => createFaceLivenessSessionRequestSettingsSchema)),
      clientRequestToken: s.optional(s.string()),
      _keysMap: {
        kmsKeyId: "KmsKeyId",
        settings: "Settings",
        clientRequestToken: "ClientRequestToken",
      },
    },
    { additionalProperties: s.json() },
  );
