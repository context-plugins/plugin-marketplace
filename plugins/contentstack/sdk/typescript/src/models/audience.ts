import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An audience segment based on attribute rules and user behaviors. */
export type Audience = {
  /** Unique identifier of the audience. */
  uid?: string;
  /** Display name of the audience. */
  name?: string;
  /** Description of the audience and its targeting criteria. */
  description?: string;
  /** Logical conditions that determine audience membership. */
  rules?: Record<string, unknown>;
  /** ISO 8601 timestamp when the audience was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audienceSchema: Schema<Audience> = s.object<Audience>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    rules: s.optional(s.record(s.string(), s.unknown())),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
