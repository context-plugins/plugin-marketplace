import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Loss = {
  total?: number;
  realised?: number;
  unrealised?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lossSchema: Schema<Loss> = s.object<Loss>(
  {
    total: s.optional(s.float64()),
    realised: s.optional(s.float64()),
    unrealised: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
