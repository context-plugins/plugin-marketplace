import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Practitioner = {
  resourceType?: string;
  id?: string;
  identifier?: Record<string, unknown>[];
  name?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const practitionerSchema: Schema<Practitioner> = s.object<Practitioner>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    identifier: s.optional(s.array(s.record(s.string(), s.unknown()))),
    name: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
