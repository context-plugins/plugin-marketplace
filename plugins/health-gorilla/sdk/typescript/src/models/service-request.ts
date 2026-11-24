import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceRequest = {
  resourceType?: string;
  id?: string;
  status?: string;
  intent?: string;
  code?: Record<string, unknown>;
  subject?: Record<string, unknown>;
  requester?: Record<string, unknown>;
  performer?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceRequestSchema: Schema<ServiceRequest> = s.object<ServiceRequest>(
  {
    resourceType: s.optional(s.string()),
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    intent: s.optional(s.string()),
    code: s.optional(s.record(s.string(), s.unknown())),
    subject: s.optional(s.record(s.string(), s.unknown())),
    requester: s.optional(s.record(s.string(), s.unknown())),
    performer: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
