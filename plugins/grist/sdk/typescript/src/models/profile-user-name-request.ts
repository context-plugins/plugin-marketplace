import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProfileUserNameRequest = {
  /** New display name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileUserNameRequestSchema: Schema<ProfileUserNameRequest> = s.object<ProfileUserNameRequest>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
