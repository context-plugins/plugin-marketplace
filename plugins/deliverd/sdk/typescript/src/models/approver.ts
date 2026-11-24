import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Approver = {
  type: Type;
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approverSchema: Schema<Approver> = s.object<Approver>(
  {
    type: typeSchema,
    email: s.string(),
  },
  { additionalProperties: s.json() },
);
