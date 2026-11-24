import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { role1Schema, type Role1 } from "./role1.js";

export type Invitation1 = {
  id: string;
  email: string;
  role: Role1;
  /** Better Auth's invitation status, e.g. "pending". */
  status: string;
  expiresAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invitation1Schema: Schema<Invitation1> = s.object<Invitation1>(
  {
    id: s.string(),
    email: s.string(),
    role: role1Schema,
    status: s.string(),
    expiresAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
