import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usersSchema, type Users } from "./users.js";

export type OrgAccessWrite = {
  users: Record<string, Users>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgAccessWriteSchema: Schema<OrgAccessWrite> = s.object<OrgAccessWrite>(
  {
    users: s.record(
      s.string(),
      s.lazy(() => usersSchema),
    ),
  },
  { additionalProperties: s.json() },
);
