import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Invitation = {
  id: string;
  email: string;
  role: string;
  expiresAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invitationSchema: Schema<Invitation> = s.object<Invitation>(
  {
    id: s.string(),
    email: s.string(),
    role: s.string(),
    expiresAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
