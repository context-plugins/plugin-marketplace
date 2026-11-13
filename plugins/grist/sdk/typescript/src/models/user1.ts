import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";

export type User1 = {
  id: number;
  name: string;
  email?: string;
  access?: Access;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const user1Schema: Schema<User1> = s.object<User1>(
  {
    id: s.int(),
    name: s.string(),
    email: s.optional(s.string()),
    access: s.optional(s.lazy(() => accessSchema)),
  },
  { additionalProperties: s.json() },
);
