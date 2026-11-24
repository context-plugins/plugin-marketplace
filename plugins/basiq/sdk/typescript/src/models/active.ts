import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectedSchema, type Connected } from "./connected.js";

export type Active = {
  total?: number;
  connected?: Connected;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeSchema: Schema<Active> = s.object<Active>(
  {
    total: s.optional(s.int()),
    connected: s.optional(s.lazy(() => connectedSchema)),
  },
  { additionalProperties: s.json() },
);
