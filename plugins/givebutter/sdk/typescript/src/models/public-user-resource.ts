import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicUserResource = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicUserResourceSchema: Schema<PublicUserResource> = s.object<PublicUserResource>(
  {
    id: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
    },
  },
  { additionalProperties: s.json() },
);
