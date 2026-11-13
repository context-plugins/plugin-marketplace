import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Reference1 = {
  resource: string;
  fields: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reference1Schema: Schema<Reference1> = s.object<Reference1>(
  {
    resource: s.string(),
    fields: s.string(),
  },
  { additionalProperties: s.json() },
);
