import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** A user group in the UiPath organization */
export type Group = {
  /** Unique identifier of the group */
  id?: string;
  /** Display name of the group */
  name?: string;
  /** Type classification of the group */
  type?: Type1;
  /** Number of members currently in the group */
  userCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type1Schema)),
    userCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
