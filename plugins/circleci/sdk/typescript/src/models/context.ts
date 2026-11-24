import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Context = {
  /** The unique identifier of the context */
  id?: string;
  /** The name of the context */
  name?: string;
  /** When the context was created */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contextSchema: Schema<Context> = s.object<Context>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
