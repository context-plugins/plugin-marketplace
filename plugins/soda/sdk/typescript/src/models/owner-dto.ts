import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OwnerDto = {
  email?: string;
  firstName?: string;
  fullName?: string;
  lastName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ownerDtoSchema: Schema<OwnerDto> = s.object<OwnerDto>(
  {
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    lastName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
