import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClixExternalServiceSetProjectUserIdForDeviceBody = {
  projectUserId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixExternalServiceSetProjectUserIdForDeviceBodySchema: Schema<ClixExternalServiceSetProjectUserIdForDeviceBody> =
  s.object<ClixExternalServiceSetProjectUserIdForDeviceBody>(
    {
      projectUserId: s.optional(s.string()),
      _keysMap: {
        projectUserId: "project_user_id",
      },
    },
    { additionalProperties: s.json() },
  );
