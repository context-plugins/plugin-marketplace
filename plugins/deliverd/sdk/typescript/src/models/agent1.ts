import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Agent1 = {
  name: string | null;
  provider: string | null;
  externalId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agent1Schema: Schema<Agent1> = s.object<Agent1>(
  {
    name: s.nullable(s.string()),
    provider: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
