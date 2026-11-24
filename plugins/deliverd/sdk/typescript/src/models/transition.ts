import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./from.js";
import { toSchema, type To } from "./to.js";

export type Transition = {
  from: From;
  to: To;
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transitionSchema: Schema<Transition> = s.object<Transition>(
  {
    from: fromSchema,
    to: toSchema,
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
