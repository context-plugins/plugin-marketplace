import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Where it lands. Required when the gate named a destination */
export type Destination13 = {
  type: string;
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destination13Schema: Schema<Destination13> = s.object<Destination13>(
  {
    type: s.string(),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
