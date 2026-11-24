import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** Request payload for creating a new user group */
export type CreateGroupRequest = {
  /** Display name for the new group */
  name: string;
  /** Type of group to create */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createGroupRequestSchema: Schema<CreateGroupRequest> = s.object<CreateGroupRequest>(
  {
    name: s.string(),
    type: s.optional(s.lazy(() => typeSchema)),
  },
  { additionalProperties: s.json() },
);
