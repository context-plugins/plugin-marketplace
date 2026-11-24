import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userContentDtoSchema, type UserContentDto } from "./user-content-dto.js";

export type PublicApiUsersResponse = {
  content: UserContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUsersResponseSchema: Schema<PublicApiUsersResponse> = s.object<PublicApiUsersResponse>(
  {
    content: s.array(s.lazy(() => userContentDtoSchema)),
    first: s.boolean(),
    last: s.boolean(),
    number: s.int(),
    size: s.int(),
    totalElements: s.int(),
    totalPages: s.int(),
  },
  { additionalProperties: s.json() },
);
