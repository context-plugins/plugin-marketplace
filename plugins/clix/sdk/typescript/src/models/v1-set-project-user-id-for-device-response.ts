import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SetProjectUserIdForDeviceResponse = {
  deviceId?: string;
  projectUserId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SetProjectUserIdForDeviceResponseSchema: Schema<V1SetProjectUserIdForDeviceResponse> =
  s.object<V1SetProjectUserIdForDeviceResponse>(
    {
      deviceId: s.optional(s.string()),
      projectUserId: s.optional(s.string()),
      _keysMap: {
        deviceId: "device_id",
        projectUserId: "project_user_id",
      },
    },
    { additionalProperties: s.json() },
  );
