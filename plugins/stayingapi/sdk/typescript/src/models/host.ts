import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { isSuperhostSchema, type IsSuperhost } from "./unions/is-superhost.js";
import { nameSchema, type Name } from "./unions/name.js";

export type Host = {
  name: Name;
  isSuperhost: IsSuperhost;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hostSchema: Schema<Host> = s.object<Host>(
  {
    name: nameSchema,
    isSuperhost: isSuperhostSchema,
  },
  { additionalProperties: s.json() },
);
