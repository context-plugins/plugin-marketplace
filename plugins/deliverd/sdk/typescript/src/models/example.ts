import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { directionSchema, type Direction } from "./direction.js";
import { fromSchema, type From } from "./from.js";
import { toSchema, type To } from "./to.js";

export type Example = {
  id: string;
  createdAt: string;
  actionId: string;
  agentId: string | null;
  environment: string | null;
  from: From;
  to: To;
  fromRule: string | null;
  toRule: string | null;
  outcome: string | null;
  direction: Direction;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exampleSchema: Schema<Example> = s.object<Example>(
  {
    id: s.string(),
    createdAt: s.string(),
    actionId: s.string(),
    agentId: s.nullable(s.string()),
    environment: s.nullable(s.string()),
    from: fromSchema,
    to: toSchema,
    fromRule: s.nullable(s.string()),
    toRule: s.nullable(s.string()),
    outcome: s.nullable(s.string()),
    direction: directionSchema,
  },
  { additionalProperties: s.json() },
);
