import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateUserProfileDto = {
  /** DVC User Id for User Profile. Mirrors the SDK `user_id`, which is capped at 200 characters. */
  dvcUserId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateUserProfileDtoProperties: s.Shape<UpdateUserProfileDto> = {
  dvcUserId: s.optionalNullable(s.string()),
};

export const updateUserProfileDtoInternalSchema: Schema<UpdateUserProfileDto> =
  s.object<UpdateUserProfileDto>(updateUserProfileDtoProperties, { additionalProperties: s.json() });

export const updateUserProfileDtoSchema: Schema<UpdateUserProfileDto> = s.lazySchema(() =>
  s.object<UpdateUserProfileDto>(
    {
      ...updateUserProfileDtoProperties,
      dvcUserId: s.optionalNullable(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
