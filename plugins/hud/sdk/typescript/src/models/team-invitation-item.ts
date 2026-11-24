import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

/** A pending invitation to the team. */
export type TeamInvitationItem = {
  id: string;
  email: string;
  role: Role;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamInvitationItemSchema: Schema<TeamInvitationItem> = s.object<TeamInvitationItem>(
  {
    id: s.string(),
    email: s.string(),
    role: roleSchema,
    createdAt: s.dateTime(),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
