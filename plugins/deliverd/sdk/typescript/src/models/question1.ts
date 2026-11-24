import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind1Schema, type Kind1 } from "./kind1.js";

export type Question1 = {
  id: string;
  prompt: string;
  help: string | null;
  kind: Kind1;
  required: boolean;
  options: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const question1Schema: Schema<Question1> = s.object<Question1>(
  {
    id: s.string(),
    prompt: s.string(),
    help: s.nullable(s.string()),
    kind: kind1Schema,
    required: s.boolean(),
    options: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
