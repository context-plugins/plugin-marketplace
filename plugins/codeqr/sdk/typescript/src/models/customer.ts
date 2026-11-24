import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Customer = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerSchema: Schema<Customer> = s.object<Customer>(
  {
    id: s.string(),
    name: s.string(),
    email: s.string(),
    avatar: s.string(),
  },
  { additionalProperties: s.json() },
);
