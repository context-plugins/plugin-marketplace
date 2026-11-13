import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { users1Schema, type Users1 } from "./users1.js";

export type DocAccessRead = {
  maxInheritedRole: Access;
  users: Users1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docAccessReadSchema: Schema<DocAccessRead> = s.object<DocAccessRead>(
  {
    maxInheritedRole: accessSchema,
    users: s.array(s.lazy(() => users1Schema)),
  },
  { additionalProperties: s.json() },
);
