import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

/** A user or identity that has access to a resource. */
export type Collaborator = {
  email?: string;
  role?: Role;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const collaboratorSchema: Schema<Collaborator> = s.object<Collaborator>(
  {
    email: s.optional(s.string()),
    role: s.optional(s.lazy(() => roleSchema)),
  },
  { additionalProperties: s.json() },
);
