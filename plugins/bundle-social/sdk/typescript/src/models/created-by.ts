import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type CreatedBy = {
  id: string;
  externalId: string;
  email: string;
  emailVerified?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  timezone?: string | null;
  role: Role;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createdBySchema: Schema<CreatedBy> = s.object<CreatedBy>(
  {
    id: s.string(),
    externalId: s.string(),
    email: s.string(),
    emailVerified: s.optionalNullable(s.dateTime()),
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    avatarUrl: s.optionalNullable(s.string()),
    timezone: s.optionalNullable(s.string()),
    role: roleSchema,
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    deletedAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
