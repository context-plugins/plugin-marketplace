import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserUpdate = {
  name?: string;
  defaultGroupGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userUpdateSchema: Schema<UserUpdate> = s.object<UserUpdate>(
  {
    name: s.optional(s.string()),
    defaultGroupGuid: s.optional(s.string()),
    _keysMap: {
      defaultGroupGuid: "default_group_guid",
    },
  },
  { additionalProperties: s.json() },
);
