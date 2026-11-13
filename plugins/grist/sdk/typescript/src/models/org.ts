import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { userSchema, type User } from "./user.js";

export type Org = {
  id: number;
  name: string;
  domain: string | null;
  owner: User;
  access: Access;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgSchema: Schema<Org> = s.object<Org>(
  {
    id: s.int(),
    name: s.string(),
    domain: s.nullable(s.string()),
    owner: userSchema,
    access: accessSchema,
    createdAt: s.string(),
    updatedAt: s.string(),
  },
  { additionalProperties: s.json() },
);
