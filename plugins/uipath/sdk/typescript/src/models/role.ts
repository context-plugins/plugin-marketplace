import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A role defining a set of permissions in Automation Hub */
export type Role = {
  /** Unique integer identifier of the role */
  id?: number;
  /** Display name of the role */
  name?: string;
  /** Description of the permissions granted by this role */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleSchema: Schema<Role> = s.object<Role>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
