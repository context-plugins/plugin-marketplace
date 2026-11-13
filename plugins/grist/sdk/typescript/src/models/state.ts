import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type State = {
  /** Sequential action number */
  n: number;
  /** Hash identifier for this state */
  h: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateSchema: Schema<State> = s.object<State>(
  {
    n: s.int(),
    h: s.string(),
  },
  { additionalProperties: s.json() },
);
