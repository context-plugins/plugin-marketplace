import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User level permission response DTO. */
export type UserPermission = {
  /** This field is set as `true` if you can make online payments */
  payOnline?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userPermissionSchema: Schema<UserPermission> = s.object<UserPermission>(
  {
    payOnline: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
