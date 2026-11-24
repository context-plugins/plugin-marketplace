import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Errors = {
  identities: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorsSchema: Schema<Errors> = s.object<Errors>(
  {
    identities: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
