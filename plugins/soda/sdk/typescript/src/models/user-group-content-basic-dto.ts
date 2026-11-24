import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserGroupContentBasicDto = {
  name: string;
  userGroupId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userGroupContentBasicDtoSchema: Schema<UserGroupContentBasicDto> =
  s.object<UserGroupContentBasicDto>(
    {
      name: s.string(),
      userGroupId: s.string(),
    },
    { additionalProperties: s.json() },
  );
