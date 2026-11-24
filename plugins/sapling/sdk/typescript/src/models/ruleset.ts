import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rule1Schema, type Rule1 } from "./rule1.js";

export type Ruleset = {
  /** Naive ISO 8601 timestamp (UTC, no offset). */
  createdAt?: string;
  name?: string;
  rules?: Rule1[];
  /** Naive ISO 8601 timestamp (UTC, no offset). */
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rulesetSchema: Schema<Ruleset> = s.object<Ruleset>(
  {
    createdAt: s.optional(s.string()),
    name: s.optional(s.string()),
    rules: s.optional(s.array(s.lazy(() => rule1Schema))),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
