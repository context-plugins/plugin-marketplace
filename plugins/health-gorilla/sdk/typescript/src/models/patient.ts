import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Patient = {
  resourceType?: string;
  id?: string;
  identifier?: Record<string, unknown>[];
  name?: Record<string, unknown>[];
  gender?: string;
  birthDate?: string;
  address?: Record<string, unknown>[];
  telecom?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const patientSchema: Schema<Patient> = s.object<Patient>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    identifier: s.optional(s.array(s.record(s.string(), s.unknown()))),
    name: s.optional(s.array(s.record(s.string(), s.unknown()))),
    gender: s.optional(s.string()),
    birthDate: s.optional(s.dateOnly()),
    address: s.optional(s.array(s.record(s.string(), s.unknown()))),
    telecom: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
