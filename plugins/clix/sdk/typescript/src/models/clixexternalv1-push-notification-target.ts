import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1PushNotificationTarget = {
  /** Project-specific user ID for targeting. */
  projectUserId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1PushNotificationTargetSchema: Schema<Clixexternalv1PushNotificationTarget> =
  s.object<Clixexternalv1PushNotificationTarget>(
    {
      projectUserId: s.string(),
      _keysMap: {
        projectUserId: "project_user_id",
      },
    },
    { additionalProperties: s.json() },
  );
