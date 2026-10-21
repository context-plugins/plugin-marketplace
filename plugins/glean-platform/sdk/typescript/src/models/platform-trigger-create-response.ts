import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerWithSecretSchema,
  type PlatformTriggerWithSecret,
} from "./platform-trigger-with-secret.js";

export type PlatformTriggerCreateResponse = {
  trigger: PlatformTriggerWithSecret;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerCreateResponseSchema: Schema<PlatformTriggerCreateResponse> =
  s.object<PlatformTriggerCreateResponse>({
    trigger: platformTriggerWithSecretSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
