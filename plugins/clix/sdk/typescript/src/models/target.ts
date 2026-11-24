import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Target = {
  /** Target user by project user ID */
  projectUserId?: string;
  /** Target specific device */
  deviceId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const targetSchema: Schema<Target> = s.object<Target>(
  {
    projectUserId: s.optional(s.string()),
    deviceId: s.optional(s.string()),
    _keysMap: {
      projectUserId: "project_user_id",
      deviceId: "device_id",
    },
  },
  { additionalProperties: s.json() },
);
