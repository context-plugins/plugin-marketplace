import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CapabilityStatement = {
  resourceType?: string;
  status?: string;
  fhirVersion?: string;
  rest?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const capabilityStatementSchema: Schema<CapabilityStatement> = s.object<CapabilityStatement>(
  {
    resourceType: s.optional(s.string()),
    status: s.optional(s.string()),
    fhirVersion: s.optional(s.string()),
    rest: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
