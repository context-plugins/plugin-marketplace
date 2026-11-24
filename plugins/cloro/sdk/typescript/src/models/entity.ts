import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Entity = {
  /** Entity type identifier */
  type: string;
  /** Entity name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitySchema: Schema<Entity> = s.object<Entity>(
  {
    type: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
