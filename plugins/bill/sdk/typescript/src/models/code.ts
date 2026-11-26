import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Code = {
  /** Name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const codeSchema: Schema<Code> = s.object<Code>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
