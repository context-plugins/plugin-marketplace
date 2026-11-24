import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Group = {
  code?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSchema: Schema<Group> = s.object<Group>(
  {
    code: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
