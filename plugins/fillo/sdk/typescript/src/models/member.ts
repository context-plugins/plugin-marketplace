import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Member = {
  /** The member id the member endpoints address. */
  id: string;
  userId: string;
  email: string;
  name: string;
  role: string;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberSchema: Schema<Member> = s.object<Member>(
  {
    id: s.string(),
    userId: s.string(),
    email: s.string(),
    name: s.string(),
    role: s.string(),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
