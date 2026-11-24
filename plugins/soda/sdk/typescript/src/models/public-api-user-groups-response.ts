import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userGroupContentDtoSchema, type UserGroupContentDto } from "./user-group-content-dto.js";

export type PublicApiUserGroupsResponse = {
  content: UserGroupContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUserGroupsResponseSchema: Schema<PublicApiUserGroupsResponse> =
  s.object<PublicApiUserGroupsResponse>(
    {
      content: s.array(s.lazy(() => userGroupContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
