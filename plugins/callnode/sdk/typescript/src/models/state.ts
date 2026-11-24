import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type State = {
  /** Opaque token. */
  stateId?: string;
  stateName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateSchema: Schema<State> = s.object<State>(
  {
    stateId: s.optional(s.string()),
    stateName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
