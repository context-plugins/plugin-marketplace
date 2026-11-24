import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiCreateUserGroupRequestDto = {
  name: string;
  userIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateUserGroupRequestDtoSchema: Schema<PublicApiCreateUserGroupRequestDto> =
  s.object<PublicApiCreateUserGroupRequestDto>(
    {
      name: s.string(),
      userIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
