import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Action = {
  /** Reference to a nested ServiceRequest. */
  resource?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionSchema: Schema<Action> = s.object<Action>(
  {
    resource: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
