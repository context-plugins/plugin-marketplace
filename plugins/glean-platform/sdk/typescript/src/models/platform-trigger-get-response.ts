import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerSchema, type PlatformTrigger } from "./platform-trigger.js";

export type PlatformTriggerGetResponse = {
  trigger: PlatformTrigger;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerGetResponseSchema: Schema<PlatformTriggerGetResponse> =
  s.object<PlatformTriggerGetResponse>({
    trigger: platformTriggerSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
