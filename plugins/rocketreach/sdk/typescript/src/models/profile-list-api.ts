import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfileListApi = {
  /** RocketReach internal unique profile list ID */
  id?: number;
  /** Name of the profile list */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileListApiSchema: Schema<ProfileListApi> = s.object<ProfileListApi>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
