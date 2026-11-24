import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Concern = {
  principle: string;
  rule: string;
  concern: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const concernSchema: Schema<Concern> = s.object<Concern>(
  {
    principle: s.string(),
    rule: s.string(),
    concern: s.string(),
  },
  { additionalProperties: s.json() },
);
