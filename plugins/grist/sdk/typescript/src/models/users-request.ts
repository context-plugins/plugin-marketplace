import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersRequest = {
  /** The user's name to delete (for confirmation, to avoid deleting the wrong account). */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersRequestSchema: Schema<UsersRequest> = s.object<UsersRequest>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
