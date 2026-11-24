import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Member1 = {
  /** The ID of the member user. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const member1Schema: Schema<Member1> = s.object<Member1>(
  {
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
