import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserContentDto = {
  email: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userContentDtoSchema: Schema<UserContentDto> = s.object<UserContentDto>(
  {
    email: s.string(),
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    userId: s.string(),
  },
  { additionalProperties: s.json() },
);
