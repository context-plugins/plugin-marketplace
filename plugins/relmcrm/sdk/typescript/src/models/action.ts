import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Action = {
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionSchema: Schema<Action> = s.object<Action>(
  {
    type: s.optional(s.lazy(() => typeSchema)),
  },
  { additionalProperties: s.json() },
);
