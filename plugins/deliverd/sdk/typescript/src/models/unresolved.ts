import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Unresolved = {
  phrase: string;
  suggestion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unresolvedSchema: Schema<Unresolved> = s.object<Unresolved>(
  {
    phrase: s.string(),
    suggestion: s.string(),
  },
  { additionalProperties: s.json() },
);
