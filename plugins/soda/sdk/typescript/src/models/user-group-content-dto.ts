import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userContentDtoSchema, type UserContentDto } from "./user-content-dto.js";

export type UserGroupContentDto = {
  name: string;
  userGroupId: string;
  users: UserContentDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userGroupContentDtoSchema: Schema<UserGroupContentDto> = s.object<UserGroupContentDto>(
  {
    name: s.string(),
    userGroupId: s.string(),
    users: s.array(s.lazy(() => userContentDtoSchema)),
  },
  { additionalProperties: s.json() },
);
