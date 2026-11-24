import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Agents = {
  idle?: number;
  busy?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentsSchema: Schema<Agents> = s.object<Agents>(
  {
    idle: s.optional(s.int()),
    busy: s.optional(s.int()),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
