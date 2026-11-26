import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type UserUpdate = {
  state?: State;
  expiryDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userUpdateSchema: Schema<UserUpdate> = s.object<UserUpdate>(
  {
    state: s.optional(s.lazy(() => stateSchema)),
    expiryDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
