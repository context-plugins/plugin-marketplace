import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayRankings401Error1 = {
  message: string;
  code: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playRankings401Error1Schema: Schema<PlayRankings401Error1> = s.object<PlayRankings401Error1>(
  {
    message: s.string(),
    code: s.int(),
  },
  { additionalProperties: s.json() },
);
