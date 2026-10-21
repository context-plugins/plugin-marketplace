import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerPresetSchema, type PlatformTriggerPreset } from "./platform-trigger-preset.js";

export type PlatformTriggerPresetGetResponse = {
  triggerPreset: PlatformTriggerPreset;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerPresetGetResponseSchema: Schema<PlatformTriggerPresetGetResponse> =
  s.object<PlatformTriggerPresetGetResponse>({
    triggerPreset: platformTriggerPresetSchema,
    requestId: s.string(),
    _keysMap: {
      triggerPreset: "trigger_preset",
      requestId: "request_id",
    },
  });
