import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { user1Schema, type User1 } from "./user1.js";

export type OrgAccessRead = {
  users: User1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orgAccessReadSchema: Schema<OrgAccessRead> = s.object<OrgAccessRead>(
  {
    users: s.array(s.lazy(() => user1Schema)),
  },
  { additionalProperties: s.json() },
);
