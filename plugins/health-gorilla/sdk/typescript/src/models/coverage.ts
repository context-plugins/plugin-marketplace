import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Coverage = {
  resourceType?: string;
  id?: string;
  status?: string;
  beneficiary?: Record<string, unknown>;
  payor?: Record<string, unknown>[];
  subscriberId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageSchema: Schema<Coverage> = s.object<Coverage>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    beneficiary: s.optional(s.record(s.string(), s.unknown())),
    payor: s.optional(s.array(s.record(s.string(), s.unknown()))),
    subscriberId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
