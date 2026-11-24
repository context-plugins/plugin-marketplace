import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Requirement key → target-tenant resource ID. Keys must be declared in the bundle's requirements.
 * Run with `?dryRun=true` first to list required keys and candidate IDs.
 */
export type Bindings = {
  connections?: Record<string, string>;
  datastoreTables?: Record<string, string>;
  globalVariables?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bindingsSchema: Schema<Bindings> = s.object<Bindings>(
  {
    connections: s.optional(s.record(s.string(), s.string())),
    datastoreTables: s.optional(s.record(s.string(), s.string())),
    globalVariables: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
